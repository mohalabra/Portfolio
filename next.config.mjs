/** @type {import('next').NextConfig} */
const nextConfig = {
    async headers() {
        return [
          {
            source: '/(.*)',
            headers: [
              {
                key: 'x-robots-tag',
                value: 'index, follow', // Allow indexing
              },
            ],
          },
        ];
      },
};

export default nextConfig;
