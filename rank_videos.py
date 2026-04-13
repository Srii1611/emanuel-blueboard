import urllib.request
import urllib.error
import json
import csv
import time
import os

# Read videos from CSV
videos = []
csv_content = """filename,cloudinary_url
AOYP6798.MP4,https://res.cloudinary.com/dg1lg2bxk/video/upload/v1774737441/emanuel-blueboard/AOYP6798.mp4
ATXQ9587.MP4,https://res.cloudinary.com/dg1lg2bxk/video/upload/v1774737455/emanuel-blueboard/ATXQ9587.mp4
AZKC6066.MP4,https://res.cloudinary.com/dg1lg2bxk/video/upload/v1774737460/emanuel-blueboard/AZKC6066.mp4
BASS8900.MP4,https://res.cloudinary.com/dg1lg2bxk/video/upload/v1774737461/emanuel-blueboard/BASS8900.mp4
BDBP1781.MP4,https://res.cloudinary.com/dg1lg2bxk/video/upload/v1774737463/emanuel-blueboard/BDBP1781.mp4
BIYY4160.MP4,https://res.cloudinary.com/dg1lg2bxk/video/upload/v1774737465/emanuel-blueboard/BIYY4160.mp4
BNLM2851.MP4,https://res.cloudinary.com/dg1lg2bxk/video/upload/v1774737466/emanuel-blueboard/BNLM2851.mp4
BYQT1798.MP4,https://res.cloudinary.com/dg1lg2bxk/video/upload/v1774737468/emanuel-blueboard/BYQT1798.mp4
COZL8822.MP4,https://res.cloudinary.com/dg1lg2bxk/video/upload/v1774737470/emanuel-blueboard/COZL8822.mp4
CVJJ3455.MP4,https://res.cloudinary.com/dg1lg2bxk/video/upload/v1774737472/emanuel-blueboard/CVJJ3455.mp4
EFET0427.MP4,https://res.cloudinary.com/dg1lg2bxk/video/upload/v1774737474/emanuel-blueboard/EFET0427.mp4
ELUD8114.MP4,https://res.cloudinary.com/dg1lg2bxk/video/upload/v1774737476/emanuel-blueboard/ELUD8114.mp4
EPKW5172.MP4,https://res.cloudinary.com/dg1lg2bxk/video/upload/v1774737478/emanuel-blueboard/EPKW5172.mp4
FHRM9117.MP4,https://res.cloudinary.com/dg1lg2bxk/video/upload/v1774737483/emanuel-blueboard/FHRM9117.mp4
FURO8262.MP4,https://res.cloudinary.com/dg1lg2bxk/video/upload/v1774737487/emanuel-blueboard/FURO8262.mp4
FVPM2033.MP4,https://res.cloudinary.com/dg1lg2bxk/video/upload/v1774737492/emanuel-blueboard/FVPM2033.mp4
GCDV2251.MP4,https://res.cloudinary.com/dg1lg2bxk/video/upload/v1774737494/emanuel-blueboard/GCDV2251.mp4
GIWS9200.MP4,https://res.cloudinary.com/dg1lg2bxk/video/upload/v1774737497/emanuel-blueboard/GIWS9200.mp4
GYMB2339.MP4,https://res.cloudinary.com/dg1lg2bxk/video/upload/v1774737499/emanuel-blueboard/GYMB2339.mp4
GZLP5049.MP4,https://res.cloudinary.com/dg1lg2bxk/video/upload/v1774737500/emanuel-blueboard/GZLP5049.mp4
HHTO0822.MP4,https://res.cloudinary.com/dg1lg2bxk/video/upload/v1774737501/emanuel-blueboard/HHTO0822.mp4
HREN9621.MP4,https://res.cloudinary.com/dg1lg2bxk/video/upload/v1774737505/emanuel-blueboard/HREN9621.mp4
HUFP6899.MP4,https://res.cloudinary.com/dg1lg2bxk/video/upload/v1774737507/emanuel-blueboard/HUFP6899.mp4
HYWT6879.MP4,https://res.cloudinary.com/dg1lg2bxk/video/upload/v1774737509/emanuel-blueboard/HYWT6879.mp4
ITYA6408.MP4,https://res.cloudinary.com/dg1lg2bxk/video/upload/v1774737511/emanuel-blueboard/ITYA6408.mp4
IZLC8660.MP4,https://res.cloudinary.com/dg1lg2bxk/video/upload/v1774737512/emanuel-blueboard/IZLC8660.mp4
JFYT4024.MP4,https://res.cloudinary.com/dg1lg2bxk/video/upload/v1774737513/emanuel-blueboard/JFYT4024.mp4
JMOD9625.MP4,https://res.cloudinary.com/dg1lg2bxk/video/upload/v1774737515/emanuel-blueboard/JMOD9625.mp4
JOEQ5532.MP4,https://res.cloudinary.com/dg1lg2bxk/video/upload/v1774737517/emanuel-blueboard/JOEQ5532.mp4
KGHD1367.MP4,https://res.cloudinary.com/dg1lg2bxk/video/upload/v1774737519/emanuel-blueboard/KGHD1367.mp4
KHEP8849.MP4,https://res.cloudinary.com/dg1lg2bxk/video/upload/v1774737521/emanuel-blueboard/KHEP8849.mp4
KLBG7303.MP4,https://res.cloudinary.com/dg1lg2bxk/video/upload/v1774737523/emanuel-blueboard/KLBG7303.mp4
KSYD1423.MP4,https://res.cloudinary.com/dg1lg2bxk/video/upload/v1774737524/emanuel-blueboard/KSYD1423.mp4
KVKH5642.MP4,https://res.cloudinary.com/dg1lg2bxk/video/upload/v1774737527/emanuel-blueboard/KVKH5642.mp4
LSQW8383.MP4,https://res.cloudinary.com/dg1lg2bxk/video/upload/v1774737533/emanuel-blueboard/LSQW8383.mp4
MAGH2184.MP4,https://res.cloudinary.com/dg1lg2bxk/video/upload/v1774737543/emanuel-blueboard/MAGH2184.mp4
MBKK9566.MP4,https://res.cloudinary.com/dg1lg2bxk/video/upload/v1774737547/emanuel-blueboard/MBKK9566.mp4
MFIZ8878.MP4,https://res.cloudinary.com/dg1lg2bxk/video/upload/v1774737568/emanuel-blueboard/MFIZ8878.mp4
MYMI5491.MP4,https://res.cloudinary.com/dg1lg2bxk/video/upload/v1774737571/emanuel-blueboard/MYMI5491.mp4
NETV3522.MP4,https://res.cloudinary.com/dg1lg2bxk/video/upload/v1774737573/emanuel-blueboard/NETV3522.mp4
NPWX5777.MP4,https://res.cloudinary.com/dg1lg2bxk/video/upload/v1774737576/emanuel-blueboard/NPWX5777.mp4
NXHV1792.MP4,https://res.cloudinary.com/dg1lg2bxk/video/upload/v1774737578/emanuel-blueboard/NXHV1792.mp4
OODM3011.MP4,https://res.cloudinary.com/dg1lg2bxk/video/upload/v1774737581/emanuel-blueboard/OODM3011.mp4
OPMA7735.MP4,https://res.cloudinary.com/dg1lg2bxk/video/upload/v1774737588/emanuel-blueboard/OPMA7735.mp4
OWCA5924.MP4,https://res.cloudinary.com/dg1lg2bxk/video/upload/v1774737593/emanuel-blueboard/OWCA5924.mp4
OWDW0529.MP4,https://res.cloudinary.com/dg1lg2bxk/video/upload/v1774737596/emanuel-blueboard/OWDW0529.mp4
PNQB1386.MP4,https://res.cloudinary.com/dg1lg2bxk/video/upload/v1774737601/emanuel-blueboard/PNQB1386.mp4
POFL0317.MP4,https://res.cloudinary.com/dg1lg2bxk/video/upload/v1774737608/emanuel-blueboard/POFL0317.mp4
POLN8298.MP4,https://res.cloudinary.com/dg1lg2bxk/video/upload/v1774737611/emanuel-blueboard/POLN8298.mp4
PRDU3989.MP4,https://res.cloudinary.com/dg1lg2bxk/video/upload/v1774737614/emanuel-blueboard/PRDU3989.mp4
QBFM3566.MP4,https://res.cloudinary.com/dg1lg2bxk/video/upload/v1774737619/emanuel-blueboard/QBFM3566.mp4
QJID3936.MP4,https://res.cloudinary.com/dg1lg2bxk/video/upload/v1774737627/emanuel-blueboard/QJID3936.mp4
QZAH3261.MP4,https://res.cloudinary.com/dg1lg2bxk/video/upload/v1774737632/emanuel-blueboard/QZAH3261.mp4
RKNU8277.MP4,https://res.cloudinary.com/dg1lg2bxk/video/upload/v1774737634/emanuel-blueboard/RKNU8277.mp4
RPCS0641.MP4,https://res.cloudinary.com/dg1lg2bxk/video/upload/v1774737638/emanuel-blueboard/RPCS0641.mp4
SFNF2196.MP4,https://res.cloudinary.com/dg1lg2bxk/video/upload/v1774737641/emanuel-blueboard/SFNF2196.mp4
SIMO1762.MP4,https://res.cloudinary.com/dg1lg2bxk/video/upload/v1774737643/emanuel-blueboard/SIMO1762.mp4
SMTI4747.MP4,https://res.cloudinary.com/dg1lg2bxk/video/upload/v1774737648/emanuel-blueboard/SMTI4747.mp4
STMK0057.MP4,https://res.cloudinary.com/dg1lg2bxk/video/upload/v1774737653/emanuel-blueboard/STMK0057.mp4
TKAE7467.MP4,https://res.cloudinary.com/dg1lg2bxk/video/upload/v1774737658/emanuel-blueboard/TKAE7467.mp4
TWUW6670.MP4,https://res.cloudinary.com/dg1lg2bxk/video/upload/v1774737660/emanuel-blueboard/TWUW6670.mp4
UATX6806.MP4,https://res.cloudinary.com/dg1lg2bxk/video/upload/v1774737668/emanuel-blueboard/UATX6806.mp4
UNEW9977.MP4,https://res.cloudinary.com/dg1lg2bxk/video/upload/v1774737671/emanuel-blueboard/UNEW9977.mp4
UOKG4760.MP4,https://res.cloudinary.com/dg1lg2bxk/video/upload/v1774737673/emanuel-blueboard/UOKG4760.mp4
UXLF8931.MP4,https://res.cloudinary.com/dg1lg2bxk/video/upload/v1774737678/emanuel-blueboard/UXLF8931.mp4
VGVH1276.MP4,https://res.cloudinary.com/dg1lg2bxk/video/upload/v1774737686/emanuel-blueboard/VGVH1276.mp4
VRRK5346.MP4,https://res.cloudinary.com/dg1lg2bxk/video/upload/v1774737693/emanuel-blueboard/VRRK5346.mp4
VTKT8927.MP4,https://res.cloudinary.com/dg1lg2bxk/video/upload/v1774737697/emanuel-blueboard/VTKT8927.mp4
VUCD8739.MP4,https://res.cloudinary.com/dg1lg2bxk/video/upload/v1774737702/emanuel-blueboard/VUCD8739.mp4
WMNV8157.MP4,https://res.cloudinary.com/dg1lg2bxk/video/upload/v1774737708/emanuel-blueboard/WMNV8157.mp4
WTLV9150.MP4,https://res.cloudinary.com/dg1lg2bxk/video/upload/v1774737712/emanuel-blueboard/WTLV9150.mp4
WXUT5966.MP4,https://res.cloudinary.com/dg1lg2bxk/video/upload/v1774737719/emanuel-blueboard/WXUT5966.mp4
XMHX5615.MP4,https://res.cloudinary.com/dg1lg2bxk/video/upload/v1774737726/emanuel-blueboard/XMHX5615.mp4
XOTS7943.MP4,https://res.cloudinary.com/dg1lg2bxk/video/upload/v1774737733/emanuel-blueboard/XOTS7943.mp4"""

import io
reader = csv.DictReader(io.StringIO(csv_content))
seen = set()
for row in reader:
    if row['filename'] not in seen:
        seen.add(row['filename'])
        # Generate frame URL at 3 seconds
        url = row['cloudinary_url']
        parts = url.split('/upload/')
        frame_url = parts[0] + '/upload/so_3/' + parts[1].replace('.mp4', '.jpg')
        videos.append({'filename': row['filename'], 'cloudinary_url': url, 'frame_url': frame_url})

print(f"Total unique videos: {len(videos)}")

# Viral patterns from research
VIRAL_PATTERNS = """
Viral construction/trade reels in 2025 follow these patterns (ranked by performance):
1. TRANSFORMATION REVEAL — before/after, wide room shot, smooth plaster finish visible
2. SATISFYING CLOSE-UP — trowel work, smooth surface, detailed craftsmanship
3. TEAM ON STILTS — workers visible at height, ceiling work, impressive scale
4. WIDE ROOM REVEAL — full room visible, natural light, clean finished walls
5. PROCESS DOCUMENTATION — step by step, materials to finished product
6. HOOK MOMENT — something visually arresting in first frame (bright room, height, scale)

Score each video frame on:
- viral_pattern: which pattern it matches (1-6 above, or "none")
- hook_strength: 1-10 (how likely to stop scrolling in first frame)
- visual_quality: 1-10 (lighting, clarity, stability)
- content_type: what's actually in the shot
- post_priority: "post now" / "post soon" / "skip"
- suggested_hook_text: a 5-word hook caption for this specific frame
"""

def analyze_batch(batch_videos, batch_num, api_key):
    content = []
    filenames = []
    
    for v in batch_videos:
        content.append({
            "type": "image", 
            "source": {"type": "url", "url": v['frame_url']}
        })
        filenames.append(v['filename'])
    
    content.append({
        "type": "text",
        "text": f"""Analyze these {len(batch_videos)} video frames from Emanuel Blueboard & Plastering Corp.
Filenames in order: {', '.join(filenames)}

{VIRAL_PATTERNS}

Respond ONLY with a JSON array, one object per frame in the same order:
[
  {{
    "filename": "FILENAME.MP4",
    "viral_pattern": "pattern name",
    "hook_strength": 8,
    "visual_quality": 7,
    "content_type": "what is in the shot",
    "post_priority": "post now",
    "suggested_hook_text": "Five word hook here"
  }}
]"""
    })
    
    payload = json.dumps({
        "model": "claude-opus-4-5",
        "max_tokens": 2000,
        "messages": [{"role": "user", "content": content}]
    }).encode('utf-8')
    
    req = urllib.request.Request(
        "https://api.anthropic.com/v1/messages",
        data=payload,
        headers={
            "x-api-key": api_key,
            "anthropic-version": "2023-06-01", 
            "content-type": "application/json"
        },
        method="POST"
    )
    
    try:
        with urllib.request.urlopen(req, timeout=60) as resp:
            result = json.loads(resp.read().decode())
            text = result['content'][0]['text']
            clean = text.replace('```json','').replace('```','').strip()
            return json.loads(clean)
    except Exception as e:
        print(f"  Batch {batch_num} error: {e}")
        return []

# Get API key from environment or fallback
api_key = os.environ.get('ANTHROPIC_API_KEY') or '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'
if not api_key:
    print("ERROR: Set ANTHROPIC_API_KEY environment variable")
    exit(1)

all_results = []
batch_size = 5

print(f"\nAnalyzing {len(videos)} videos in batches of {batch_size}...")

for i in range(0, len(videos), batch_size):
    batch = videos[i:i+batch_size]
    batch_num = i//batch_size + 1
    total_batches = (len(videos) + batch_size - 1) // batch_size
    print(f"Batch {batch_num}/{total_batches}: {[v['filename'] for v in batch]}")
    
    results = analyze_batch(batch, batch_num, api_key)
    
    # Add cloudinary URL to each result
    for r in results:
        for v in batch:
            if v['filename'] == r.get('filename'):
                r['cloudinary_url'] = v['cloudinary_url']
                r['frame_url'] = v['frame_url']
    
    all_results.extend(results)
    print(f"  Got {len(results)} results")
    time.sleep(3)

# Sort by hook_strength then visual_quality
all_results.sort(key=lambda x: (x.get('hook_strength', 0) + x.get('visual_quality', 0)), reverse=True)

# Save to JSON
with open(r'C:\Users\manne\OneDrive\Desktop\emanuel-blueboard\video_rankings.json', 'w') as f:
    json.dump(all_results, f, indent=2)

# Save to CSV
with open(r'C:\Users\manne\OneDrive\Desktop\emanuel-blueboard\video_rankings.csv', 'w', newline='') as f:
    if all_results:
        writer = csv.DictWriter(f, fieldnames=all_results[0].keys())
        writer.writeheader()
        writer.writerows(all_results)

print(f"\nDone. Ranked {len(all_results)} videos.")
print("\nTOP 15 — POST THESE FIRST:")
print("-" * 80)
for i, r in enumerate(all_results[:15], 1):
    print(f"{i:2}. {r.get('filename','?'):20} Hook:{r.get('hook_strength','?')}/10  Quality:{r.get('visual_quality','?')}/10  Pattern:{r.get('viral_pattern','?')}")
    print(f"    Hook text: \"{r.get('suggested_hook_text','?')}\"")
    print(f"    Content: {r.get('content_type','?')}")
    print()

