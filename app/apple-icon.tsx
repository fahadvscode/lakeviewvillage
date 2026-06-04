import { ImageResponse } from 'next/og'

export const size = { width: 180, height: 180 }
export const contentType = 'image/png'

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          background: '#1a1614',
          borderRadius: 40,
          position: 'relative',
        }}
      >
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            color: '#c9a86c',
            fontSize: 96,
            fontWeight: 600,
            fontFamily: 'Georgia, serif',
            lineHeight: 1,
            marginTop: -8,
          }}
        >
          A
        </div>
        <div
          style={{
            position: 'absolute',
            bottom: 36,
            width: 96,
            height: 4,
            borderRadius: 999,
            background: 'rgba(201, 168, 108, 0.55)',
          }}
        />
      </div>
    ),
    { ...size },
  )
}
