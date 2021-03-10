import LocaleContext from '../contexts/Locale';
import Button from '../elements/button/Button';
import Section from '../elements/section/Section';

export default function ReactContextAPI () {
  return (
    <LocaleContext.Consumer>
    {localeContext => {
      return (
        <div className="container">
          <Section title="React Context API">
            <p className="box-mg-b">Current Locale: <strong>{ localeContext.locale }</strong></p>
            <Button theme="white" txt="Toggle locale" onClick={ localeContext.toggleLocale }/>
          </Section>
        </div>
      )
    }}
    </LocaleContext.Consumer>
  );
};