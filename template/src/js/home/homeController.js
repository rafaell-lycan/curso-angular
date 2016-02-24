(function () {
  'use strict';

  angular.module('app').controller('homeController', homeController);

  homeController.$inject = [];

  function homeController () {
    var vm = this;
    vm.count = 0;

    vm.increment = function  () {
      vm.count++;
    }

    vm.jobs = [
   {
      "_id":"56ca70616454912bfc557d8b",
      "name":"DBA of MongoDB",
      "description":"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga, at?",
      "remote":true,
      "location":"São Paulo",
      "type":"Full Time",
      "_company":{
         "_id":"56c69654c4f57f6e16605c3b",
         "name":"Oi",
         "website":"http://oi.com.br"
      },
      "tags":[
         "mongodb",
         "nosql"
      ],
      "createdAt":"2016-02-22T04:44:12.212Z"
   },
   {
      "_id":"56ca70616454912bfc557d88",
      "name":"Ruby on Rails Sênior",
      "description":"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores, fuga!",
      "remote":true,
      "location":"Curitiba",
      "type":"Full Time",
      "_company":{
         "_id":"56c69654c4f57f6e16605c3c",
         "name":"BLZ",
         "website":"http://belezanaweb.com.br",
         "companyLogo":"https://media.licdn.com/mpr/mpr/shrinknp_100_100/AAEAAQAAAAAAAAbRAAAAJDQyZjA2ZTNlLWMyMWEtNDlhYy05OTM2LTdlMzYxMWVlYTU0ZQ.png"
      },
      "tags":[
         "ruby",
         "rails",
         "sênior"
      ],
      "createdAt":"2016-02-22T04:44:12.212Z"
   },
   {
      "_id":"56ca70616454912bfc557d89",
      "name":"Python Expert",
      "description":"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos, magnam.",
      "remote":false,
      "location":"São Paulo",
      "type":"Freela",
      "_company":{
         "_id":"56c69654c4f57f6e16605c3c",
         "name":"BLZ",
         "website":"http://belezanaweb.com.br",
         "companyLogo":"https://media.licdn.com/mpr/mpr/shrinknp_100_100/AAEAAQAAAAAAAAbRAAAAJDQyZjA2ZTNlLWMyMWEtNDlhYy05OTM2LTdlMzYxMWVlYTU0ZQ.png"
      },
      "tags":[
         "python"
      ],
      "createdAt":"2016-02-22T04:44:12.212Z"
   },
   {
      "_id":"56ca70616454912bfc557d8e",
      "name":"Recortador de HTML/CSS",
      "description":"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sed, neque!",
      "remote":false,
      "location":"Bélgica",
      "type":"Full Time",
      "_company":{
         "_id":"56c69654c4f57f6e16605c3f",
         "name":"IBM",
         "website":"http://www.ibm.com",
         "companyLogo":"https://pbs.twimg.com/profile_images/614802024832610304/_CZY2puL_400x400.jpg"
      },
      "tags":[
         "html",
         "css"
      ],
      "createdAt":"2016-02-22T04:44:12.212Z"
   },
   {
      "_id":"56ca70616454912bfc557d8d",
      "name":"AWS Engeneer",
      "description":"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestiae, placeat.",
      "remote":false,
      "location":"São Paulo",
      "type":"Estágio",
      "_company":{
         "_id":"56c69654c4f57f6e16605c3e",
         "name":"Oracle",
         "website":"http://www.oracle.com",
         "companyLogo":"http://cdn.cruxialcio.com/sites/cruxialcio.com/files/styles/article_large_slide/public/2014/07/17/cn-image-oraclelogo.png?itok=JvNzv6ve"
      },
      "tags":[
         "aws"
      ],
      "createdAt":"2016-02-22T04:44:12.212Z"
   },
   {
      "_id":"56ca70616454912bfc557d8f",
      "name":"WebMaster",
      "description":"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestias, modi.",
      "remote":false,
      "location":"São Paulo",
      "type":"Full Time",
      "_company":{
         "_id":"56c69654c4f57f6e16605c3f",
         "name":"IBM",
         "website":"http://www.ibm.com",
         "companyLogo":"https://pbs.twimg.com/profile_images/614802024832610304/_CZY2puL_400x400.jpg"
      },
      "tags":[
         "javascript",
         "html",
         "css"
      ],
      "createdAt":"2016-02-22T04:44:12.212Z"
   },
   {
      "_id":"56ca70616454912bfc557d8c",
      "name":"SysAdmin for PaaS",
      "description":"Lorem ipsum dolor sit amet, consectetur adipisicing elit. A, laborum.",
      "remote":false,
      "location":"Floripa",
      "type":"Full Time",
      "_company":{
         "_id":"56c69654c4f57f6e16605c3b",
         "name":"Oi",
         "website":"http://oi.com.br"
      },
      "tags":[
         "sysadmin",
         "paas",
         "python",
         "linux"
      ],
      "createdAt":"2016-02-22T04:44:12.212Z"
   },
   {
      "_id":"56ca70616454912bfc557d87",
      "name":"NodeJS Developer",
      "description":"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error, voluptates!",
      "remote":false,
      "location":"Rio de Janeiro",
      "type":"Freela",
      "_company":{
         "_id":"56c69654c4f57f6e16605c39",
         "name":"Globo.com",
         "website":"http://globo.com",
         "companyLogo":"http://s.glbimg.com/en/ho/static/globocom2012/img/fb_marca.png"
      },
      "tags":[
         "javascript",
         "nodejs",
         "mongodb"
      ],
      "createdAt":"2016-02-22T04:44:12.212Z"
   },
   {
      "_id":"56ca70616454912bfc557d8a",
      "name":"Java Certificated",
      "description":"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptates, mollitia.",
      "remote":true,
      "location":"Salvador",
      "type":"Estágio",
      "_company":{
         "_id":"56c69654c4f57f6e16605c3d",
         "name":"Novatec",
         "website":"http://www.novatec.com.br",
         "companyLogo":"https://pbs.twimg.com/profile_images/458961077972123648/i5UzTEx7.jpeg"
      },
      "tags":[
         "java",
         "ajb",
         "ejb",
         "ijb",
         "ojb",
         "ujb"
      ],
      "createdAt":"2016-02-22T04:44:12.212Z"
   },
   {
      "_id":"56ca70616454912bfc557d86",
      "name":"Fullstack Ninja JavaScript",
      "description":"Lorem ipsum dolor sit amet, consectetur adipisicing elit. In, ab.",
      "remote":false,
      "location":"São Paulo",
      "type":"Full Time",
      "_company":{
         "_id":"56c69654c4f57f6e16605c39",
         "name":"Globo.com",
         "website":"http://globo.com",
         "companyLogo":"http://s.glbimg.com/en/ho/static/globocom2012/img/fb_marca.png"
      },
      "tags":[
         "javascript",
         "angular",
         "react",
         "nodejs",
         "mongodb"
      ],
      "createdAt":"2016-02-22T04:44:12.212Z"
   },
   {
      "_id":"56ca70616454912bfc557d90",
      "name":"Designer/UX/UI",
      "description":"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt, doloribus.",
      "remote":true,
      "location":"Berlin",
      "type":"Full Time",
      "_company":{
         "_id":"56c69654c4f57f6e16605c3f",
         "name":"IBM",
         "website":"http://www.ibm.com",
         "companyLogo":"https://pbs.twimg.com/profile_images/614802024832610304/_CZY2puL_400x400.jpg"
      },
      "tags":[
         "photoshop",
         "sketch",
         "ui",
         "ux"
      ],
      "createdAt":"2016-02-22T04:44:12.212Z"
   },
   {
      "_id":"56ca70616454912bfc557d91",
      "name":"Fifa Player",
      "description":"Auto explicativo",
      "remote":false,
      "_company":{
         "_id":"56c69654c4f57f6e16605c3b",
         "name":"Oi",
         "website":"http://oi.com.br"
      },
      "tags":[
         "pes 2015",
         "pes 2016",
         "pes 2017"
      ],
      "createdAt":"2016-02-22T04:44:12.212Z"
   },
   {
      "_id":"56ca70616454912bfc557d92",
      "name":"Scrum Master",
      "description":"Scrum, Kanbam.. etc",
      "_company":{
         "_id":"56c69654c4f57f6e16605c3a",
         "name":"Walmart.com",
         "website":"http://walmart.com.br",
         "companyLogo":"http://static.wmobjects.com.br/arquivos/walmart-facebook.jpg"
      },
      "tags":[

      ],
      "createdAt":"2016-02-22T04:44:12.212Z"
   }
];
  }

})();
