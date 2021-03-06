import LocaleContext from '../contexts/Locale';
import Section from '../elements/section/Section';

export default function Context () {
  return (
    <LocaleContext.Consumer>
    {localeContext => {
      return (
        <div className="container">
          <Section title="Context API">
            <p>Current Locale: { localeContext.locale }</p>
          </Section>
        </div>
      )
    }}
    </LocaleContext.Consumer>
  );
};