self.__uv$config = {
    prefix: '/terbium/sw/',
    bare: 'https://terbium-bare.indian-island-game.workers.dev/',
    encodeUrl: Ultraviolet.codec.xor.encode,
    decodeUrl: Ultraviolet.codec.xor.decode,
    handler: '/terbium/uv/uv.handler.js',
    bundle: '/terbium/uv/uv.bundle.js',
    config: '/terbium/uv/uv.config.js',
    sw: '/terbium/uv/uv.sw.js',
};
