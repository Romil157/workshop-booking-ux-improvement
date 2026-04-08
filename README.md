# Workshop Booking - UX/UI Enhancement

A modernized, responsive, and highly accessible redesign of the original FOSSEE Workshop Booking platform.

## 🚀 Live Environment Setup

### Prerequisites
- Node.js (v18 or higher)
- npm or yarn

### Installation
1. Clone this repository:
   ```bash
   git clone https://github.com/Romil157/workshop-booking-ux-improvement.git
   cd workshop-booking-ux-improvement
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the development server:
   ```bash
   npm run dev
   ```
4. Open `http://localhost:5173` in your browser.

---

## 🎨 Design Reasoning & Principles

### What design principles guided your improvements?
I applied a series of fundamental modern UI/UX design principles to transform the platform:
- **Visual Hierarchy & Typography**: Implemented a dual-font strategy (`Outfit` for bold, highly readable headers; `Inter` for clean data/text presentation). Critical metrics are visually distinguished instantly.
- **Glassmorphism & Depth**: Leveraged subtle glass-like layered panels with soft, dynamic drop shadows underneath cards (`Card.css`) to create depth and a premium aesthetic without feeling cluttered.
- **Micro-interactions & Feedback**: Reusable components feature fluid hover micro-animations (e.g., buttons depress slightly, cards elevate) ensuring the application feels alive and responsive to intent.
- **Cognitive Load Reduction**: Reduced the visual "noise" of raw tables by abstracting workshops and stats into distinctly stylized grid items with clear `Badge` color coding for status mappings.

### How did you ensure responsiveness across devices?
Using a strict **Mobile-First methodology**:
- **Navigation Transformation**: Replaced the permanent desktop sidebar with a fixed bottom navigation bar on mobile screens (`< 768px`). This aligns with native application paradigms where your thumb can easily reach critical navigational sections (`Dashboard`, `Workshops`, `Propose`).
- **CSS Grid/Flexbox**: All grid configurations (`Dashboard` metrics, `Catalog` forms) collapse into a 1-column layout gracefully. 
- **Relative Units**: Adopted `rem` and CSS variables (`var(--space-*)`) extensively instead of hard-coded pixels so padding and font sizing scale effectively on smaller form factors.

### What trade-offs did you make between the design and performance?
- **Trade-off 1 (Animation vs. CPU)**: Modern visual effects like backdrop filters (Glassmorphism) can be computationally heavy for budget mobile devices. *Mitigation:* I minimized `backdrop-filter` limits strictly to the main navigational overlays, preventing excessive paint operations while maintaining the aesthetic.
- **Trade-off 2 (Vanilla CSS vs Custom Styling libraries)**: I opted to write pure Vanilla CSS paired with global root variables over utilizing heavy libraries like Bootstrap, or runtime-CSS-in-JS like Styled Components. This keeps the JS bundle lightweight (strictly `react` and `react-router-dom`) improving Time-To-Interactive drastically while demanding more manual styling effort.
- **Trade-off 3 (Icons)**: I included `lucide-react` for beautifully consistent iconography. While this introduces a dependency, it guarantees SVG rendering sharpness and avoids the overhead/render blocking of loading external icon font stylesheets.

### What was the most challenging part of the task and how did you approach it?
**Challenge**: Creating a cohesive, highly modular component system from scratch (using only raw CSS) that still gracefully handled varying screen topologies—particularly accommodating forms (like the `Proposal` page) on mobile.
**Approach**: I established an iron-clad `index.css` acting as a Design Token registry mapping out all spacing, color, and typographic semantic variables up-front (`--space-6`, `--color-primary-light`, etc). As long as individual components (like `Input`, `Card`, `Badge`) restricted stylistic rules purely to these global tokens, establishing a scalable, highly consistent product was much less error-prone. Building the `<Layout />` wrapper effectively isolated complex viewport breakpoints (like Sidebar-to-Bottom-Nav logic) entirely away from feature code.

---

## 👀 Visual Showcase

> *Note: Please insert the before and after visual assets here prior to submission!*

### The Dashboard
| Before (`/before/dashboard_desktop.png`) | After (`/after/dashboard_desktop.png`) |
|------------------------------------------|----------------------------------------|
| *(Old functional bare-bones table style)* | *(New clean interface with interactive card grids)* |

### Mobile Responsiveness
| Proposal Form (Desktop) | Proposal Form (Mobile) |
|-------------------------|------------------------|
| `(/after/proposal_desktop.png)` | `(/after/proposal_mobile.png)` |


## 🛠 Tech Stack
- **Framework**: React.js (Vite)
- **Routing**: React Router DOM (Declarative view control)
- **Styling**: Pure CSS3 & Local Scoped imports 
- **Icons**: Lucide React
