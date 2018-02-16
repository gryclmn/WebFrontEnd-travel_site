import MobileMenu from './modules/MobileMenu';
import RevealOnScroll from './modules/RevealOnScroll';
import $ from 'jquery';
import StickyHeader from './modules/StickyHeader';

var movileMenu = new MobileMenu();
new RevealOnScroll( $(".feature-item"), "85%" );
new RevealOnScroll( $(".testimonial"), "75%" );
var stickyHeader = new StickyHeader();