# News Proxy Server

This project is a serverless proxy server for the News API, designed to fetch and serve news articles securely. It's built to be deployed on Netlify and provides a simple API for retrieving top headlines and searching for news articles.

## Features

- Fetch top headlines for specific news categories
- Search for news articles based on keywords
- Pagination support for both endpoints
- CORS-enabled for cross-origin requests
- Serverless architecture for easy deployment and scaling

## Technologies Used

- Node.js
- Express.js
- Axios for HTTP requests
- Serverless-http for serverless deployment
- CORS middleware for handling cross-origin requests
- Netlify for hosting and serverless functions

## Setup

1. Clone the repository:
         git clone https://github.com/SID9927/news-proxy-server.git
   
2. Navigate to the project directory:
          cd news-proxy-server
   
3. Install dependencies:
          npm install
   
4. Set up your News API key:
- Sign up for an API key at [NewsAPI.org](https://newsapi.org/)
- Set the `NEWS_API_KEY` environment variable in your Netlify deployment settings

5. Deploy to Netlify:
- Connect your GitHub repository to Netlify
- Netlify will automatically deploy your project using the settings in `netlify.toml`

## API Usage

The proxy server provides two main endpoints:

1. Fetch top headlines:
        GET /api/news?category={category}&pageSize={pageSize}&page={page}
   
2. Search for news articles:
        GET /api/search?q={query}&pageSize={pageSize}&page={page}


Replace `{category}`, `{query}`, `{pageSize}`, and `{page}` with appropriate values.

## Project Structure

- `functions/api.js`: Main serverless function containing the Express app and API routes
- `netlify.toml`: Netlify configuration file for build settings and redirects
- `package.json`: Project dependencies and scripts

## Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

## License

This project is open source and available under the MIT License.
