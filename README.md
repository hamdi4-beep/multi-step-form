# Multi-Step Form

A subscription flow implementation featuring a four-step form with plan selection, add-ons, and order summary.

## Standout Features

- **State Management via Router**: Leverages React Router's location state to pass data between steps, avoiding prop drilling or external state management libraries.

- **Dynamic Payment Cycle Toggle**: Real-time price updates across plans and add-ons when switching between monthly/yearly billing, with visual feedback throughout the flow.

- **Interactive Selection System**: Custom click handlers that manage active states through DOM manipulation and CSS classes, providing immediate visual feedback for plan and add-on selections.

- **Summary with Inline Editing**: Review page allows payment cycle changes without losing selections, recalculating totals on the fly.

## Tech Stack

- React 18 + TypeScript
- React Router for navigation and state
- CSS with custom properties for theming

## Get Started

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build
```

The app will be available at `http://localhost:5173/multi-step-form/your-info`
