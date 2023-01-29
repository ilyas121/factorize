import { JaaSMeeting} from '@jitsi/react-sdk';
import React, { useRef, useState } from 'react';

const App = () => {
    return (
        <JaaSMeeting
            appId = {"vpaas-magic-cookie-4f02c12f5a224ba0b56bd64952b18000"}
            roomName = "factorize-1234"
            jwt = {"eyJraWQiOiJ2cGFhcy1tYWdpYy1jb29raWUtNGYwMmMxMmY1YTIyNGJhMGI1NmJkNjQ5NTJiMTgwMDAvNjVkNGZjLVNBTVBMRV9BUFAiLCJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiJqaXRzaSIsImlzcyI6ImNoYXQiLCJpYXQiOjE2NzQ1Mzc5ODYsImV4cCI6MTY3NDU0NTE4NiwibmJmIjoxNjc0NTM3OTgxLCJzdWIiOiJ2cGFhcy1tYWdpYy1jb29raWUtNGYwMmMxMmY1YTIyNGJhMGI1NmJkNjQ5NTJiMTgwMDAiLCJjb250ZXh0Ijp7ImZlYXR1cmVzIjp7ImxpdmVzdHJlYW1pbmciOnRydWUsIm91dGJvdW5kLWNhbGwiOnRydWUsInNpcC1vdXRib3VuZC1jYWxsIjpmYWxzZSwidHJhbnNjcmlwdGlvbiI6dHJ1ZSwicmVjb3JkaW5nIjp0cnVlfSwidXNlciI6eyJoaWRkZW4tZnJvbS1yZWNvcmRlciI6ZmFsc2UsIm1vZGVyYXRvciI6dHJ1ZSwibmFtZSI6ImlseWFzc2FsaGkiLCJpZCI6Imdvb2dsZS1vYXV0aDJ8MTE2MDA2NDM5MTM4MzU5Mzk5NzAxIiwiYXZhdGFyIjoiIiwiZW1haWwiOiJpbHlhc3NhbGhpQGdtYWlsLmNvbSJ9fSwicm9vbSI6IioifQ.RuWVg_xKRS3g3EIOe0v3EIw-Ptz8xpu47u_-Mgu125kgvNh-_RQQG1UJtzEe8ndlB0htKQmIIucWTBJA8o7slU6uV9LErLvWzz1XRVXK15UGMdOFNs7SMjBVyJGVUD5dVQy6SVQG8uvfszaZdGM0xgorxdaK5i7qnD82S_GX9kvXqd3x3S8zQtVxoUBzM_7KBvX_Z-oy6bRaIAgPBJUchxdM123FwD6v4j9pPBV5JV95gC5oiZkqDPBA90JOzGbSj8n0oi_NegmX2sDHDYeqjKJTdhoZ4L1ay_X3b11deTySXSziXkUe3ug-jupP2PRW9_7j1E6_C1jCdXdu7g3eCA"}
            configOverwrite = {{
                disableThirdPartyRequests: true,
                disableLocalVideoFlip: true,
                backgroundAlpha: 0.5
            }}
            interfaceConfigOverwrite = {{
                VIDEO_LAYOUT_FIT: 'nocrop',
                MOBILE_APP_PROMO: false,
                TILE_VIEW_MAX_COLUMNS: 4
            }}
            // onApiReady = { (externalApi) => ({...}) }
            getIFrameRef = { (iframeRef) => { iframeRef.style.height = '400px'; } }
        />
    );
};

export default App;