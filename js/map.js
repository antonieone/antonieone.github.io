
    var map;

    DG.then(function () {
        map = DG.map('map', {
            center: [50.810839, 61.680333],
            zoom: 13
        });

        DG.marker([50.810839, 61.680333]).addTo(map);
    });
