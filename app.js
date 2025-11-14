const yearEl = document.getElementById('year');
if (yearEl) yearEl.textContent = new Date().getFullYear();

// Ten curated culture box items
const cultureItems = [
  {
    title: 'Gothic Literature & Storytelling',
    description: 'Exploring the macabre and mysterious to process inner worlds and societal shadows.',
    tags: ['Identity','Art'],
    alt: 'Stack of gothic novels with dark aesthetic',
  },
  {
    title: 'Writing & Creative Expression',
    description: 'Writing as a daily reflective practice that transforms experience into narrative.',
    tags: ['Expression','Routine'],
    alt: 'Open journal with pen ready for writing',
  },
  {
    title: 'Celtic Heritage & Myth',
    description: 'Scottish and Celtic lore shaping worldview, symbolism, and ancestral continuity.',
    tags: ['Heritage','Myth'],
    alt: 'Celtic knot design carved in stone',
  },
  {
    title: 'Animals & Compassionate Caregiving',
    description: 'Daily care rituals grounding empathy, patience, and responsibility.',
    tags: ['Compassion','Grounding'],
    alt: 'Person gently interacting with a pet',
  },
  {
    title: 'Morning Rituals',
    description: 'Coffee, quiet reflection, and preparation establishing focus for the day.',
    tags: ['Routine','Wellbeing'],
    alt: 'Coffee mug and morning light through window',
  },
  {
    title: 'Web Development & AI Discovery',
    description: 'Learning to build on the web opened new modes of problem solving and exploration.',
    tags: ['Learning','Technology'],
    alt: 'Code editor screen featuring HTML and JavaScript',
  },
  {
    title: 'Education, Ambition & Advancement',
    description: 'Pursuing an MBA as an investment in future growth and family legacy.',
    tags: ['Education','Growth'],
    alt: 'Graduation cap beside study materials',
  },
  {
    title: 'Travel & Cultural Curiosity',
    description: 'Immersive experiences expanding empathy and enriching creative perspective.',
    tags: ['Exploration','Perspective'],
    alt: 'Passport and map with travel notes',
  },
  {
    title: 'Family & Legacy',
    description: 'Motivation rooted in nurturing, continuity, and intentional future-building.',
    tags: ['Family','Legacy'],
    alt: 'Parent holding hands with children outdoors',
  },
  {
    title: 'Artistic Symbols: Raven & Moth',
    description: 'A raven for liminal wisdom; a moth for metamorphosis—rebirth through endings, cyclical transformation, and navigation by unseen light.',
    tags: ['Symbolism','Art'],
    alt: 'Illustrated raven and lunar moth motif representing transformation and liminal rebirth',
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
        <span>${item.symbolism ? 'Raven & Moth Placeholder' : 'Image Placeholder'}</span>
      </figure>
      <h3>${item.title}</h3>
      <p>${item.description}</p>
      <div class="meta-tags">${item.tags.map((t,i)=>`<span class="${i%2? 'secondary':''}">${t}</span>`).join('')}</div>
    `;
    grid.appendChild(li);
  });
}

renderItems(cultureItems);

// Future enhancement placeholders:
// - Add image upload or URL input
// - Filtering by tag
// - Light/Dark theme toggle
