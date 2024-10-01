// Import the 'withVideos' function using the ECMAScript module syntax
import withVideos from 'next-videos';

/** @type {import('next').NextConfig} */
const nextConfig = {
    output:'export',
    images: { unoptimized: true }
};

// Use the 'withVideos' function in the configuration
export default withVideos(nextConfig);