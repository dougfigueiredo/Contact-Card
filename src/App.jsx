import Profile from "./components/Profile";

export default function App() {
  return (
    <div className="app">
      <Profile
        avatar="https://upload.wikimedia.org/wikipedia/pt/6/62/TommyShelby.jpg"
        name="Tomas Shelby"
        bio="Full-stack javascript developer at Acme Inc."
        email="tommy.navalha@email.com"
        phone="+5521987654321"
        githubUrl="https://github.com"
        linkedinUrl="https://linkedin.com"
        twitterUrl="https://twitter.com"
      />
    </div>
  );
}
