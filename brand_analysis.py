import csv
import json
import urllib.request
import urllib.error
import time

API_KEY = "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"  # Replace this

CSV_PATH = r"C:\Users\manne\OneDrive\Documents\emanuel-blueboard\uploaded_videos.csv"

def get_frame_url(cloudinary_url, offset_seconds=5):
    parts = cloudinary_url.split('/upload/')
    base = parts[0] + '/upload/'
    file_path = parts[1].rsplit('.', 1)[0] + '.jpg'
    return base + f'so_{offset_seconds}/' + file_path

def analyze_batch(frame_urls, batch_num):
    content = []
    for url in frame_urls:
        content.append({
            "type": "image",
            "source": {"type": "url", "url": url}
        })
    content.append({
        "type": "text",
        "text": """You are analyzing video frames from Emanuel Blueboard & Plastering Corp — a licensed plastering and blueboard contractor in Framingham, MetroWest MA. In business since 2001, 1000+ projects.

Analyze ALL the frames above and respond ONLY with a valid JSON object:
{
  "dominant_colors": ["describe the 3 most common colors seen across frames"],
  "color_palette_mood": "warm/cool/neutral/industrial",
  "job_types_seen": ["list all types: interior walls, ceilings, exterior, residential, commercial etc"],
  "lighting_style": "natural/artificial/mixed - describe quality",
  "shot_styles": ["close-up work", "wide room shots", "team visible", "before/after", "tools/materials"],
  "worker_visibility": "always/sometimes/rarely - workers visible in frame",
  "location_types": ["describe settings: new construction, renovation, luxury homes etc"],
  "video_quality": "high/medium/low - overall production quality",
  "brand_strengths": ["list 3 visual strengths of this content"],
  "brand_weaknesses": ["list 2 honest weaknesses"],
  "recommended_caption_tone": "professional/community/educational/urgency - pick one primary",
  "caption_style_notes": "one sentence on what caption style fits this content best",
  "hashtag_categories": ["list 5 most relevant hashtag themes"],
  "posting_time_recommendation": "best time to post based on content type",
  "overall_brand_score": 1-10
}"""
    })

    payload = json.dumps({
        "model": "claude-opus-4-5",
        "max_tokens": 1500,
        "messages": [{"role": "user", "content": content}]
    }).encode('utf-8')

    req = urllib.request.Request(
        "https://api.anthropic.com/v1/messages",
        data=payload,
        headers={
            "x-api-key": API_KEY,
            "anthropic-version": "2023-06-01",
            "content-type": "application/json"
        },
        method="POST"
    )

    try:
        with urllib.request.urlopen(req, timeout=60) as response:
            result = json.loads(response.read().decode('utf-8'))
            text = result['content'][0]['text']
            clean = text.replace('```json', '').replace('```', '').strip()
            return json.loads(clean)
    except Exception as e:
        print(f"Batch {batch_num} error: {e}")
        return None

def main():
    # Read and deduplicate URLs
    seen = set()
    videos = []
    with open(CSV_PATH, 'r') as f:
        reader = csv.DictReader(f)
        for row in reader:
            url = row['cloudinary_url']
            if url not in seen:
                seen.add(url)
                videos.append({'filename': row['filename'], 'url': url})

    print(f"Unique videos: {len(videos)}")

    # Generate frame URLs - use 5s offset for all
    frame_urls = []
    for v in videos:
        frame_url = get_frame_url(v['url'], offset_seconds=5)
        frame_urls.append(frame_url)
        print(f"Frame: {frame_url}")

    # Analyze in batches of 5 frames each
    batch_size = 5
    all_results = []
    
    for i in range(0, min(len(frame_urls), 30), batch_size):  # Analyze first 30 for speed
        batch = frame_urls[i:i+batch_size]
        print(f"\nAnalyzing batch {i//batch_size + 1} ({len(batch)} frames)...")
        result = analyze_batch(batch, i//batch_size + 1)
        if result:
            all_results.append(result)
            print(f"Batch {i//batch_size + 1} done. Score: {result.get('overall_brand_score')}")
        time.sleep(2)  # Rate limit protection

    # Synthesize final brand ruleset
    print("\nSynthesizing final brand ruleset...")
    
    synthesis_prompt = f"""Based on these {len(all_results)} analysis results from Emanuel's videos, create ONE definitive Brand Ruleset.

Analysis results:
{json.dumps(all_results, indent=2)}

Respond ONLY with a JSON object — the master Brand Ruleset:
{{
  "brand_name": "Emanuel Blueboard & Plastering Corp",
  "location": "Framingham, MetroWest MA",
  "primary_colors": ["top 3 brand colors with hex codes if possible"],
  "visual_style": "one sentence describing the overall visual identity",
  "content_pillars": ["3-4 recurring content themes seen across videos"],
  "caption_voice": "one sentence defining the caption tone and style",
  "caption_hooks": ["5 proven hook styles that fit this brand"],
  "hashtag_master_list": ["20 hashtags to always use"],
  "avoid": ["3 things to never do in captions or visuals"],
  "ideal_post_format": "describe the ideal post structure",
  "target_audience": "describe who engages with this content",
  "brand_score": 1-10,
  "upgrade_recommendations": ["3 specific ways to improve content quality"]
}}"""

    payload = json.dumps({
        "model": "claude-opus-4-5",
        "max_tokens": 2000,
        "messages": [{"role": "user", "content": synthesis_prompt}]
    }).encode('utf-8')

    req = urllib.request.Request(
        "https://api.anthropic.com/v1/messages",
        data=payload,
        headers={
            "x-api-key": API_KEY,
            "anthropic-version": "2023-06-01",
            "content-type": "application/json"
        },
        method="POST"
    )

    with urllib.request.urlopen(req, timeout=60) as response:
        result = json.loads(response.read().decode('utf-8'))
        text = result['content'][0]['text']
        clean = text.replace('```json', '').replace('```', '').strip()
        brand_ruleset = json.loads(clean)

    # Save output
    output_path = r"C:\Users\manne\OneDrive\Documents\emanuel-blueboard\brand_ruleset.json"
    with open(output_path, 'w') as f:
        json.dump(brand_ruleset, f, indent=2)

    print(f"\n✅ BRAND RULESET SAVED TO: {output_path}")
    print(json.dumps(brand_ruleset, indent=2))

if __name__ == "__main__":
    main()
