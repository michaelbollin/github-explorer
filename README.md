# GitHub Repository Explorer

A web application for searching public GitHub repositories.

## Installation

```bash
# Install dependencies
yarn install
yarn dev
```

### Available Scripts

```bash
# Development
yarn dev         # Start development server
yarn test        # Run tests
yarn test:e2e    # Run E2E tests with 
yarn lint        # Run ESLint

# Production
yarn build       # Create production build
```

### Configuration
There is constants.ts file with the configuration of the search and sorting options.

## Architecture Decisions

### Stack

- **Next.js**: not necessary at this project scope as not using SSR/SSG here, but chosen for ease of development and extending with the backend features in the future
- **React Query**: Handles data fetching, caching, and synchronization
- **TailwindCSS**: for styling, with newly published v4

### Key Technical Choices

1. **API Implementation**
   - Using public access to Github API
2. **Sorting**:
   - Client-side sorting for small result sets
   - Server-side sorting for larger datasets
3. **Testing**:
   - Jest for unit tests
   - Playwright for E2E tests


## Known Limitations

1. **GitHub API Rate Limits**
   - Unauthenticated: 60 requests/hour
   - Consider implementing server API route with the token to increase the rate limit to 5000

2. **Search Results**
   - Even if there are more results, Github truncates the result to 4000
   - Added tooltip to inform the user about the limit


## Future Improvements

1. Advanced filtering options
2. Adding backend part (secret token embedding and rate limit increase)
3. Adding redis on the backend to cache the results

## Contributing

1. Create your feature branch (`git checkout -b feature/amazing-feature`)
2. Commit your changes (`git commit -m 'Add amazing feature'`)
3. Push to the branch (`git push origin feature/amazing-feature`)
4. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
