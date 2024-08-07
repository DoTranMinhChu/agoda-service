# Agoda Service Package

This npm package provides functionalities to interact with the Agoda API for flight search and location information.

## Installation

To install the Agoda Service Package, use npm:
```bash
    npm install online-travel-tequila-service
```


## Usage

### AgodaService

The `AgodaService` class initializes the Agoda API service. It provides access to two main functionalities: location and flight search.

#### Example:

```typescript
import { AgodaService } from 'install online-travel-tequila-service';

// Initialize Agoda Service
const tequilaService = new AgodaService({
  apiKey: 'YOUR_API_KEY',
  baseUrl: 'https://api.tequila.kiwi.com',
});

// Access location service
const locationService = tequilaService.location;

// Access flight search service
const searchService = tequilaService.search
```


### AgodaLocationService

#### Example:

```typescript
import { AgodaLocationService } from 'install online-travel-tequila-service';

// Initialize Agoda Location Service
const locationService = new AgodaLocationService({
  apiKey: 'YOUR_API_KEY',
  baseUrl: 'https://api.tequila.kiwi.com',
});

// Example: Search location by query
const locationQuery = await locationService.searchByQuery({
  term: 'New York',
  limit: 10,
});
```

or


```typescript
import { AgodaService } from 'install online-travel-tequila-service';

// Initialize Agoda Service
const tequilaService = new AgodaService({
  apiKey: 'YOUR_API_KEY',
  baseUrl: 'https://api.tequila.kiwi.com',
});

// Access location service
const locationService = tequilaService.location;

// Example: Search location by query
const locationQuery = await locationService.searchByQuery({
  term: 'New York',
  limit: 10,
});
```


### AgodaSearchService

#### Example:

```typescript
// Initialize Agoda Search Service
import { AgodaSearchService } from 'install online-travel-tequila-service';

// Initialize Agoda Search Service
const searchService = new AgodaSearchService({
  apiKey: 'YOUR_API_KEY',
  baseUrl: 'https://api.tequila.kiwi.com',
});

// Example: Search flights
const flightResults = await searchService.searchFlights({
  fly_from: 'NYC',
  fly_to: 'LAX',
  date_from: '2023-12-01',
  date_to: '2023-12-05',
});

```

or


```typescript
import { AgodaService } from 'install online-travel-tequila-service';

// Initialize Agoda Service
const tequilaService = new AgodaService({
  apiKey: 'YOUR_API_KEY',
  baseUrl: 'https://api.tequila.kiwi.com',
});

// Access search service
const searchService = tequilaService.search

// Example: Search flights
const flightResults = await searchService.searchFlights({
  fly_from: 'NYC',
  fly_to: 'LAX',
  date_from: '2023-12-01',
  date_to: '2023-12-05',
});
```#   a g o d a - s e r v i c e  
 