webpackJsonp([1,4],{349:function(t,e){function o(t){throw new Error("Cannot find module '"+t+"'.")}o.keys=function(){return[]},o.resolve=o,t.exports=o,o.id=349},350:function(t,e,o){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=o(438),i=o(0),a=o(462),r=o(459);a.a.production&&o.i(i.a)(),o.i(n.a)().bootstrapModule(r.a)},458:function(t,e,o){"use strict";var n=o(0);o.d(e,"a",function(){return r});var i=this&&this.__decorate||function(t,e,o,n){var i,a=arguments.length,r=a<3?e:null===n?n=Object.getOwnPropertyDescriptor(e,o):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(t,e,o,n);else for(var s=t.length-1;s>=0;s--)(i=t[s])&&(r=(a<3?i(r):a>3?i(e,o,r):i(e,o))||r);return a>3&&r&&Object.defineProperty(e,o,r),r},a=this&&this.__metadata||function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)},r=function(){function t(){this.title="greg-o-meter!"}return t=i([o.i(n.U)({selector:"app-root",template:o(617),styles:[o(615)]}),a("design:paramtypes",[])],t)}()},459:function(t,e,o){"use strict";var n=o(195),i=o(0),a=o(428),r=o(434),s=o(458),c=o(461);o.d(e,"a",function(){return d});var l=this&&this.__decorate||function(t,e,o,n){var i,a=arguments.length,r=a<3?e:null===n?n=Object.getOwnPropertyDescriptor(e,o):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(t,e,o,n);else for(var s=t.length-1;s>=0;s--)(i=t[s])&&(r=(a<3?i(r):a>3?i(e,o,r):i(e,o))||r);return a>3&&r&&Object.defineProperty(e,o,r),r},u=this&&this.__metadata||function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)},d=function(){function t(){}return t=l([o.i(i.b)({declarations:[s.a,c.a],imports:[n.a,a.a,r.a],providers:[],bootstrap:[s.a]}),u("design:paramtypes",[])],t)}()},460:function(t,e,o){"use strict";o.d(e,"a",function(){return n});var n=[{id:1,question:"What is your favorite series?",options:[{option:"How I Met Your Mother",score:100},{option:"Brooklyn 99",score:75},{option:"Modern Family",score:50},{option:"Game of Thrones",score:25}]},{id:2,question:"What do you do in your spare time?",options:[{option:"Netflix",score:50},{option:"Cooking!",score:25},{option:"Playing game of course!",score:75},{option:"Play some musical instruments",score:100}]},{id:3,question:"From the female musician below, which one do you like the most?",options:[{option:"Isyana Sarasvati",score:100},{option:"Raisa",score:50},{option:"Marion Jola",score:25},{option:"BCL",score:75}]},{id:4,question:"Choose one movie that amazed you the most:",options:[{option:"A Star Is Born",score:25},{option:"Inception",score:75},{option:"Baby Driver",score:100},{option:"Bohemian Rhapsody",score:50}]},{id:5,question:"What is your favorite game?",options:[{option:"Fifa",score:50},{option:"Need for Speed",score:75},{option:"Simcity",score:100},{option:"Street Fighter",score:25}]}]},461:function(t,e,o){"use strict";var n=o(0),i=o(460),a=o(632);o.n(a);o.d(e,"a",function(){return c});var r=this&&this.__decorate||function(t,e,o,n){var i,a=arguments.length,r=a<3?e:null===n?n=Object.getOwnPropertyDescriptor(e,o):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(t,e,o,n);else for(var s=t.length-1;s>=0;s--)(i=t[s])&&(r=(a<3?i(r):a>3?i(e,o,r):i(e,o))||r);return a>3&&r&&Object.defineProperty(e,o,r),r},s=this&&this.__metadata||function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)},c=function(){function t(){this.n=0,this.totalQ=0,this.questions=i.a,this.totalScore=0,this.show=!1}return t.prototype.startQuiz=function(t){this.myArray=t,this.totalQ+=1},t.prototype.saveAnswer=function(t){var e=this;this.activeItem=t,this.totalScore+=t,o.i(a.setTimeout)(function(){e.n+=1,e.totalQ+=1,e.myArray=e.questions[e.n],e.activeItem=0},1e3),this.totalQ==this.questions.length&&(this.totalScore<=126?(this.finalStatus="Ah...Not that I dont like your tastes, we could still be friend of course",this.meter="low"):this.totalScore<251&&this.totalScore>=126?(this.finalStatus="Hmmm... Though we have different tastes, but there are few things we have in common :)",this.meter="medium"):this.totalScore<376&&this.totalScore>=251?(this.finalStatus="We have common tastes, we could talk about a lot of things!",this.meter="high"):this.totalScore>=376&&(this.finalStatus="Super! Are you my long lost twins?",this.meter="super"))},t.prototype.showPicture=function(){this.show=!0},t.prototype.ngOnInit=function(){},t=r([o.i(n.U)({selector:"app-quiz",template:o(618),styles:[o(616)]}),s("design:paramtypes",[])],t)}()},462:function(t,e,o){"use strict";o.d(e,"a",function(){return n});var n={production:!0}},615:function(t,e){t.exports="header{background:#addfe8;text-align:center;padding-top:50px;padding-bottom:50px}.meter{position:absolute;top:120px;left:0;width:100%}.meter .line{width:100%;display:block;height:8px;background:#179c3d;border-radius:5px}.meter .image{background-image:url(assets/ian.jpg);width:50px;height:50px;background-position:50%;background-size:cover;border-radius:50%;position:absolute;top:-20px;left:0;animation:rolling 4s alternate infinite;animation-delay:2s;animation-fill-mode:both}@keyframes rolling{0%{left:-5%;transform:rotate(0deg) scale(.5);-webkit-transform:rotate(0deg) scale(.5)}to{transform:rotate(1turn) scale(1.5);-webkit-transform:rotate(1turn) scale(1.5);left:100%}}"},616:function(t,e){t.exports=".btn{width:100%;margin-top:50px}.btn-primary,.card-header{background:navy}.card-header{color:#fff}.list-group-item.selected{background:#d8ffd8}.final-image{position:fixed;width:100%;height:100%;top:0;left:0;display:none}.final-image img{animation:none;width:100%}.final-image.selected{display:block}"},617:function(t,e){t.exports='<div class="row">\n  <div class="col-md-12">\n    <header class="navbar navbar-expand">\n      <h1>{{title}}</h1>\n      <div class="meter">\n        <span class="line"></span>\n        <div class="image"></div>\n      </div>\n    </header>\n  </div>\n  <div class="col-md-12">\n    <app-quiz></app-quiz>\n  </div>\n</div>\n'},618:function(t,e){t.exports='<div *ngIf="myArray" class="card">\n  <div class="card-header">{{myArray.question}}</div>\n\n  <ul class="list-group">\n    <li *ngFor="let opt of myArray.options"\n      [class.selected]="opt.score === activeItem"\n      (click)="saveAnswer(opt.score)"\n      class="list-group-item">\n      {{opt.option}}\n    </li>\n  </ul>\n\n</div>\n\n<div class="row">\n  <div *ngIf="totalQ == 0" class="col-md-12">\n    <div class="alert alert-primary" role="alert">\n      <p>Hej! Today 24 April 2019, Ian turns 26. To celebrate his birthday, let\'s play a game!</p>\n    </div>\n    <button type="button" name="start" (click)="startQuiz(questions[0])" class="btn btn-primary">Start</button>\n  </div>\n</div>\n\n<div class="row">\n\n  <div *ngIf="totalQ == questions.length+1" class="col-md-12">\n    <div class="alert alert-warning">\n      <h5>Your result: </h5>\n      <h4>{{finalStatus}}</h4>\n    </div>\n\n    <p class="alert alert-success">Send a birthday wish to Ian/Pur/Greg (whatever you call him). Share <a href="#" (click) = showPicture()>this picture</a> on your IG story(mention @gregkristian) or send him a message with the picture ^^\n    </p>\n    <div class="final-image" [class.selected]="show === true">\n      <img src="assets/ultah-{{meter}}.jpg" alt="">\n    </div>\n  </div>\n\n</div>\n'},634:function(t,e,o){t.exports=o(350)}},[634]);