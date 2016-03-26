'use strict';

var React = require('react');
var moment = require('moment');
var ApplicationStore = require('../../../shared/stores/ApplicationStore');
var cx = require('react/lib/cx');

var Footer = React.createClass({
  render: function() {
    var classesMap = {
      'footer': true,
      'site-footer': true,
      'clearfix': true
    };
    var classes = cx(classesMap);
    var year = moment().format('YYYY');
    var siteTitle = this.props.context.getStore(ApplicationStore).getState().globals.siteTitle;
    return (
      <footer className={classes}>
         <section className="copyright">{siteTitle} &copy; {year}</section>
         <section className="poweredby">
          <span className="engine">Lars Berg <a href="https://github.com/vesparny/morpheus" >This Was Fun</a></span>
          <span className="theme"> <a href="https://github.com/TryGhost/Casper" ></a></span>
         </section>
    </footer>
    );
  }
});

module.exports = Footer;
