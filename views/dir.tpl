<!DOCTYPE html>
<html lang="en" dir="ltr">

<head>
  <meta charset="utf-8">
  <title>{{title}}</title>
<!--   <script type="text/javascript" src="../iconfont/lovely/iconfont.js"></script>
  <script type="text/javascript" src="../iconfont/icon_file/iconfont.js"></script> -->
  <style media="screen">
  @font-face {font-family: "iconfont";
    src: url('iconfont.eot?t=1536886745233'); /* IE9*/
    src: url('iconfont.eot?t=1536886745233#iefix') format('embedded-opentype'), /* IE6-IE8 */
    url('data:application/x-font-woff;charset=utf-8;base64,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') format('woff'),
    url('iconfont.ttf?t=1536886745233') format('truetype'), /* chrome, firefox, opera, Safari, Android, iOS 4.2+*/
    url('iconfont.svg?t=1536886745233#iconfont') format('svg'); /* iOS 4.1- */
  }

  .iconfont {
    font-family:"iconfont" !important;
    font-size:16px;
    font-style:normal;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  .icon-rar:before { content: "\e634"; }

  .icon-wenjian:before { content: "\e62a"; }

  .icon-zip:before { content: "\e649"; }

  .icon-text:before { content: "\e903"; }

  .icon-css:before { content: "\e601"; }

  .icon-js:before { content: "\e60e"; }

  .icon-json:before { content: "\e613"; }

  .icon-html:before { content: "\e7b4"; }

  </style>
  <style>
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }

    html,
    body {
      width: 100%;
      height: 100%;
      /* background: rgba(218, 212, 212, 0.7); */
    }
   video
   {
     float: left;
     margin-left: 150px;
   }
    .wrapper{
      background: rgba(218, 212, 212, 0.7);
      width: 100%;
      height: 100%;
      padding-top: 50px;
    }
    .content
    {
      width: 60vw;
      height: 60vh;
      margin: 0 auto;
    }
    a {
      text-decoration: none;
      color: black;
      width: 25%;
      height: 30px;
      font-size: 20px;
    }

    a:hover {
      color: blue;
      text-decoration: underline;
    }
    .ctxs
    {
      width:100%;
    }
    .ctx
    {
      width: 25%;
      float: left;
    }
  </style>
</head>

<body>
  <div class="wrapper">
    <div class="content">
      <div class="ctxs">
          {{#each files}}
          <div class="ctx">
          <span>
             <i class="iconfont icon-{{icon}}"></i>
          </span>
          <a href="{{../dir}}/{{file}}">{{file}}</a>
          </div>
          {{/each}}
      </div>
    </div>
  </div>
</body>

</html>
