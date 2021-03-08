import Section from '../elements/section/Section';
import Users from '../components/users/Users';

export default function ReduxAsync () {
  return (
    <div className="container">
      <Section title="Redux Async">
        <p>Fetching users from Core-API</p>
        <Users />
      </Section>
    </div>
  )
};