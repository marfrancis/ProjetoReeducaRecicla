<?php 


    function numeroPar ($array){
        $resp = [];
        for ($i = 0; $i < count($array); $i++) {
            if ($array[$i] %2 == 0) {
                $resp[] = $i;
            }
    }
    return $resp;
    }
    var_dump (numeroPar([0, 1, 2, 3, 4, 5, 6]));