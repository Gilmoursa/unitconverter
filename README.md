# Unit Converter

A clean, accessible unit converter app built with vanilla HTML, CSS, and JavaScript.

**Live demo:** https://gilmoursa.github.io/unitconverter/

## Converters

| Category | Units |
|---|---|
| ⚖️ Weight | Kilograms, Pounds, Ounces |
| 🌡️ Temperature | Celsius, Fahrenheit, Kelvin |
| 📏 Distance | Meters, Kilometers, Miles |
| 💨 Speed | mph, km/h, m/s, Knots |

## Features

- **Live conversion** — results update as you type, no submit button needed
- **Swap ⇄** — reverse the conversion direction in one click; the current result moves back into the input
- **Copy ⎘** — copy any result to the clipboard with a single click; button flashes green to confirm
- **Clear** — reset the input and result fields on any card independently
- **Decimal precision** — global control in the header to show 2–8 decimal places; updates all active results immediately

## Design & accessibility

- 2-column card grid on desktop, single column on mobile
- Each card has a distinct colour accent (orange · red · green · blue)
- All interactive elements have visible focus indicators for keyboard navigation
- Screen-reader friendly: result fields use `aria-live`, buttons have `aria-label`, decorative icons are `aria-hidden`
- Semantic HTML landmarks (`<header>`, `<main>`, `<section>`)

## Tech stack

- Vanilla HTML, CSS, JavaScript (no frameworks or build step)
- Hosted on GitHub Pages

## Running locally

Open `index.html` in any browser — no install or build step required.
