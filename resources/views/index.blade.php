@php
$config = [
    'appName' => config('app.name'),
    'locale' => $locale = app()->getLocale(),
    'locales' => config('app.locales'),
    'githubAuth' => config('services.github.client_id'),
];
@endphp

 
<html lang="{{ app()->getLocale() }}">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">

  <title> {{ config('app.name') }}</title>

  <link rel="stylesheet" href="{{ mix('dist/css/app.css') }}">
  <script src="https://unpkg.com/axios/dist/axios.min.js"></script>
  <script src="http://ajax.googleapis.com/ajax/libs/jquery/2.0.0/jquery.min.js"></script>
  <script src="/jquery-3.3.1.min.js"></script>
</head>
<body>
  <div id="app"> 
      <div id="Aplicacion" >
          <app></app>
      </div>
  </div>
  
  
  <script>
    window.config = @json($config);
  </script> 

 
  <script src="{{ asset('dist/js/app.js') }}"></script>
</body>
</html> 
  