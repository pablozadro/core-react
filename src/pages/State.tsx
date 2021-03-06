import { Link } from "react-router-dom";
import Section from '../elements/section/Section';
import Article from '../elements/article/Article';

export default function State () {
  return (
    <div className="container">
      <Section title="State management">
        <Article title="Overview">
          <ul className="list">
            <li>
              <Link className="link primary" to="/state/context">Context</Link>
            </li>
            <li>
              <Link className="link primary" to="/state/redux-async">Redux Async</Link>
            </li>
          </ul>
        </Article>
      </Section>
    </div>
  );
};