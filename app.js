const yearEl = document.getElementById('year');
if (yearEl) yearEl.textContent = new Date().getFullYear();

// Ten curated culture box items
const cultureItems = [
  {
    title: 'Gothic Literature & Storytelling',
    description: 'Exploring the macabre and mysterious to process inner worlds and societal shadows, reflecting my identity and artistic expression.',
    tags: ['Identity','Art'],
    alt: 'Stack of gothic novels with dark aesthetic',
    imageUrl: './digital culture box 1.png',
    links: [
      { label: 'Support on Patreon', url: 'https://www.patreon.com/c/EMcTere' },
      { label: 'Read on GitHub', url: 'https://murrayec1.github.io/SadGirlStories/' }
    ]
  },
  {
    title: 'Writing & Creative Expression',
    description: 'Writing as a daily reflective practice that transforms experience into narrative, expressing my creativity and personal growth.',
    tags: ['Expression','Routine'],
    alt: 'Open journal with pen ready for writing',
    imageUrl: './dcb2.png',
  },
  {
    title: 'Cultural Heritage',
    description: 'A celebration of my Scottish, Mexican, and American roots, expressing how diverse traditions and stories shape my identity and worldview.',
    tags: ['Heritage','Expression'],
    alt: 'Representation of multiracial cultural heritage',
    imageUrl: './multiracial.png',
  },
  {
    title: 'Animals & Compassionate Caregiving',
    description: 'Caring for animals reflects my empathy, patience, and commitment to nurturing life, a core part of my identity and values.',
    tags: ['Compassion','Grounding'],
    alt: 'Person holding a cat, dog, and rabbit',
    imageUrl: './animals.png',
  },
  {
    title: 'Morning Rituals',
    description: 'Starting the day with coffee and quiet reflection, a practice rooted in mindfulness and cultural appreciation for intentional beginnings.',
    tags: ['Routine','Wellbeing'],
    alt: 'Coffee mug and morning light through window',
    imageUrl: './coffee.png',
  },
  {
    title: 'Web Development & AI Discovery',
    description: 'Learning to build on the web opened new modes of problem solving and exploration, reflecting my curiosity and technical growth.',
    tags: ['Learning','Technology'],
    alt: 'Person working on a laptop with web and AI elements in the background',
    imageUrl: './web_AI.png',
  },
  {
    title: 'Education, Ambition & Advancement',
    description: 'Pursuing an MBA as an investment in future growth and family legacy, reflecting my dedication to personal and professional development.',
    tags: ['Education','Growth'],
    alt: 'Representation of education and ambition with graduation elements',
    imageUrl: './ambition.png',
  },
  {
    title: 'Travel & Cultural Curiosity',
    description: 'Immersive experiences expanding empathy and enriching creative perspective, reflecting my passion for exploration and understanding.',
    tags: ['Exploration','Perspective'],
    alt: 'Person exploring a scenic cityscape',
    imageUrl: './travel.png',
  },
  {
    title: 'Family & Legacy',
    description: 'Motivation rooted in nurturing, continuity, and intentional future-building, reflecting my commitment to family and heritage.',
    tags: ['Family','Legacy'],
    alt: 'Family photo and heirlooms representing legacy and continuity',
    imageUrl: './family.png',
  },
  {
    title: 'Artistic Symbol: Moth',
    description: 'A moth symbolizes reincarnation, adaptation, rising above challenges, and perseverance—qualities that reflect my culture and personal journey.',
    tags: ['Symbolism','Art'],
    alt: 'Illustrated moth motif representing transformation and perseverance',
    imageUrl: './moth.png',
    symbolism: true,
  },
];

function renderItems(items) {
  const grid = document.getElementById('items-grid');
  if (!grid) return;
  grid.innerHTML = '';
  items.forEach((item) => {
    const li = document.createElement('article');
    li.className = 'item-card';
    li.setAttribute('role', 'listitem');
    if (item.symbolism) li.classList.add('symbolism');

    li.innerHTML = `
      <figure class="item-media" aria-label="${item.alt}">
        ${item.imageUrl ? `<img src="${item.imageUrl}" alt="${item.alt}" loading="lazy">` : `<span>${item.symbolism ? 'Raven & Moth Placeholder' : 'Image Placeholder'}</span>`}
      </figure>
      <h3>${item.title}</h3>
      <p>${item.description}</p>
      <div class="meta-tags">${item.tags.map((t,i)=>`<span class="${i%2? 'secondary':''}">${t}</span>`).join('')}</div>
      ${item.links ? `<div class="item-links">${item.links.map(link => `<a href="${link.url}" target="_blank" rel="noopener noreferrer">${link.label}</a>`).join(' | ')}</div>` : ''}
    `;
    grid.appendChild(li);
  });
}

renderItems(cultureItems);

// Future enhancement placeholders:
// - Add image upload or URL input
// - Filtering by tag
// - Light/Dark theme toggle
