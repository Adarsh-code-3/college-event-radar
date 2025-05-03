
# CampusConnect: College Event Aggregator Platform

CampusConnect is a web platform that helps college students discover tech events happening across multiple campuses. Find hackathons, workshops, tech talks, and more - all in one place.

![CampusConnect Screenshot](https://images.unsplash.com/photo-1540575467063-178a50c2df87?ixlib=rb-4.0.3&w=1080&fit=max&q=80)

## Features

- **Event Discovery**: Browse a curated list of upcoming tech events at colleges nationwide
- **Advanced Filtering**: Filter events by type, date, college name, and more
- **Event Submission**: Submit your own events to share with the community
- **Responsive Design**: Works seamlessly on desktop, tablet, and mobile devices
- **Event Details**: Get comprehensive information about each event including dates, locations, and registration links

## Technology Stack

- **React**: Frontend library for building the user interface
- **TypeScript**: Type-safe JavaScript for robust application development
- **React Router**: For handling navigation between different pages
- **Tailwind CSS**: Utility-first CSS framework for styling
- **shadcn/ui**: High-quality UI components for the interface
- **Zod**: Form validation library
- **React Hook Form**: For managing forms and validation
- **date-fns**: Modern JavaScript date utility library

## Project Structure

```
src/
├── components/          # Reusable UI components
├── data/                # Mock event data
├── pages/               # Main application pages
├── types/               # TypeScript type definitions
└── utils/               # Utility functions
```

## Getting Started

### Prerequisites

- Node.js (v14.0.0 or later)
- npm (v6.0.0 or later)

### Installation

1. Clone the repository
   ```bash
   git clone https://github.com/yourusername/campus-connect.git
   cd campus-connect
   ```

2. Install dependencies
   ```bash
   npm install
   ```

3. Start the development server
   ```bash
   npm run dev
   ```

4. Open your browser and navigate to `http://localhost:8080`

## Deployment

This project can be built for production using:

```bash
npm run build
```

The built files will be in the `dist/` directory.

## Future Enhancements

- User authentication and personalized event recommendations
- Real-time notifications for upcoming events
- Event calendar integration
- Event rating and review system
- Integration with college event APIs for automatic data collection

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgments

- All college event organizers who share their events with the community
- The open-source community for the amazing tools and libraries

---

Created with ❤️ by [Your Name]
