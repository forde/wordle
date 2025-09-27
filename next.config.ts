import type { NextConfig } from 'next'
import { withYak } from "next-yak/withYak";

const nextConfig: NextConfig = {
    images: {
        remotePatterns: [new URL('https://flagsapi.com/**')],
    },
}
export default withYak(nextConfig);
