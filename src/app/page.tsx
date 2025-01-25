import HomeServer from './components/HomeServer'; // Import the server component

export default function Home() {
  return (
    <div>
      
      <HomeServer /> {/* This will include the client component based on conditions */}
    </div>
  );
}
