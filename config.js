module.exports = {
    app: {
        token: 'MTE5NTk5NjEzNzQyNjAxNDI2OQ.GZM-TN.VWCdhrXfvei-r-Q2XGqdPoCbjMG-OKjbCm4uHg',
        playing: 'by Quantom',
        global: true,
        guild: 'xxx',
        ExtraMessages: false,
        loopMessage: false,

    },

    opt: {
        DJ: {
            enabled: false,
            roleName: '',
            commands: []
        },
        maxVol: 100,
        spotifyBridge: true,
        volume: 75,
        leaveOnEmpty: true,
        leaveOnEmptyCooldown: 30000,
        leaveOnEnd: true,
        leaveOnEndCooldown: 30000,
        discordPlayer: {
            ytdlOptions: {
                quality: 'highestaudio',
                highWaterMark: 1 << 25
            }
        }
    }
};
