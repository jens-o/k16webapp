<?php

  $command = $_GET['command'];
  $device = $_GET['device'];
  $remote = $_GET['remote'];

  // Create cURL call
  $service_url = 'http://k16.mynetgear.com/' . $command . '/' . $device . '/' . $remote;
  $curl = curl_init($service_url);
   
  // Send cURL to Yun board
  curl_setopt($curl, CURLOPT_IPRESOLVE, CURL_IPRESOLVE_V4 ); 
  $curl_response = curl_exec($curl);
  curl_close($curl);

  //Print answer
  echo $curl_response;

?>
