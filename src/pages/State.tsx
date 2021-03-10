import { Link } from "react-router-dom";
import Section from '../elements/section/Section';
import Article from '../elements/article/Article';

export default function State () {
  return (
    <div className="container">
      <Section title="React State Management">
        <Article title="Browse">
          <ul className="list">
            <li>
              <Link className="link primary" to="/state/react-context-api">React Context API</Link>
            </li>
            <li>
              <Link className="link primary" to="/state/react-redux-sync">React Redux Sync</Link>
            </li>
          </ul>
        </Article>
      </Section>
    </div>
  );
};