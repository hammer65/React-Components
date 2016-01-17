/*
*  LocalString uses Number.prototype.toLocalString()
*  MDN: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/toLocaleString
*  locales: BPC-47 string or array of strings
*  Guide: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl#Locale_identification_and_negotiation
*  "arab", "arabext", "bali", "beng", "deva", "fullwide", "gujr",
*  "guru", "hanidec", "khmr", "knda", "laoo", "latn", "limb",
*  "mlym", "mong", "mymr", "orya", "tamldec", "telu", "thai",
*  "tibt".
*
*  localeMatcher: "lookup","best fit" default: "best fit"
*  style: "decimal", "currency", "percent"
*  currency: ISO 4217 currency codes
*  http://www.currency-iso.org/en/home/tables/table-a1.html
*  possible values include: "USD", "EUR", "CNY"
*
*  currencyDisplay: "symbol", "code", 'name' default: symbol
*  useGrouping: Whether to use separators such as thousands separators default: true
*  minimumIntegerDigits; The minimum number of integer digits to use. Possible 
*  values are from 1 to 21
*  default is: 1
*
*  Additional options docs at documentation URL above.
*  USE: React.createElement(
*         LocalString,
*         {value:50.35,stringOptions:{style:"currency"}}
*       );
*/

var LocalString = React.createClass({
  
  format:function(n){
    var num = new Number(n);
    var def;
    var locales = this.props.locales? this.props.locales: def;
    var stringOptions = this.props.stringOptions ? this.props.stringOptions : {};
    return num.toLocaleString(locales,stringOptions);
  },
  render:function(){
    var klass = this.props.className ? this.props.className : 'fmt-string';
    return React.DOM.span({className:klass},this.format(this.props.value));
  }
});

/*
* USD: US Dollars with symbol
*/

var USD = React.createClass({
  render: function(){
    return React.createElement(
      LocalString,
      {
        className:'fmt-currency-usd',
        value:this.props.value,
        stringOptions:{
          style:"currency",currency:'USD',currencyDisplay:"symbol"
        }
      }
    );
  }
});

/*
* EURO: Euros with symbol
*/

var EURO = React.createClass({
  render: function(){
    return React.createElement(
      LocalString,
      {
        className: 'fmt-currency-euro',
        value:this.props.value,
        stringOptions:{
          style:"currency",currency:"EUR",currencyDisplay:"symbol"
        }
      }
    );
  }
});

/*
* GBP: British currency
*/

var GBP = React.createClass({
  render: function(){
    return React.createElement(
      LocalString,
      {
        className: "fmt-currency-gbp",
        value: this.props.value,
        stringOptions:{
          style:"currency",currency:"GBP",currencyDisplay:"symbol"
        }
      }
    );
  }
});

/*
* CAD: Canadian currency
*/

var CAD = React.createClass({
  render: function(){
    LocalString,
    {
      className: "fmt-currency-cad",
      value: this.props.value,
      stringOptions:{
        style:"currency",currency:"CAD",currencyDisplay:"symbol"
      }
    }
  }
});