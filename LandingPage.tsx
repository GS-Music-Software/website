import { Link } from 'react-router-dom'

export default function LandingPage() {
    return (
        <div style={{
            backgroundColor: 'black',
            color: 'white',
            minHeight: '100vh',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            fontFamily: 'sans-serif',
            textAlign: 'center'
        }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <h1 style={{ margin: '0', fontSize: '2rem' }}>gs-music</h1>
                <span style={{
                    fontSize: '10px',
                    textTransform: 'uppercase',
                    fontWeight: '500',
                    color: '#555',
                    letterSpacing: '0.1em'
                }}>Alpha</span>
            </div>
            <p style={{ color: '#888', margin: '0.5rem 0 2rem 0' }}>invite only music service</p>

            <div style={{ display: 'flex', gap: '20px' }}>
                <Link to="/login" style={{ color: 'white', textDecoration: 'none', borderBottom: '1px solid white' }}>login</Link>
                <Link to="/register" style={{ color: 'white', textDecoration: 'none', borderBottom: '1px solid white' }}>sign up</Link>
            </div>
        </div>
    )
}
