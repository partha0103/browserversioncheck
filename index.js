function getBrowserName () {

        var browser = ["MSIE", "Firefox", "Safari", "Chrome", "Edge", "OPR", "CriOS", "Trident"];
        var agent = navigator.userAgent;// index = browser.length - 1;

        //for (index; index > -1 && agent.indexOf(browser[index]) === -1; index--);

        var index =browser.length-1;
        for(index;index >= 0 ; index--){
            if(agent.indexOf(browser[index]) !== -1){
                break;
            }
        }
        return browser[index]

    }

    /**
        * Provides browser detail i.e browsername and browserversion
        * @return {Object} obj - {browsername, browserversion}
    */

    function getBrowser(){
        var browsername = getBrowserName();
        var version;
        switch(browsername){
            case 'Chrome':
                var temp = navigator.userAgent.match(/Chrom(e|ium)\/([0-9]+)\./);
                version = temp[2];
                break;
            case 'CriOS':
                var temp = navigator.userAgent.split("/");
                browsername = "Chrome"
                version = temp[temp.length-3];
                break;
            case 'Firefox':
                var temp = navigator.userAgent.split("/");
                version = temp[temp.length-1];
                break;
            case 'Safari':
                var temp = navigator.userAgent.split("/");
                version = temp[temp.length-2];
                break;
            case 'MSIE':
                version = navigator.appVersion.split("MSIE")[1];
                break;
            case 'OPR':
                var temp = navigator.userAgent.split("/");
                version = temp[temp.length-1];
                break;
            case 'Edge':
                var temp = navigator.userAgent.split("/");
                version = temp[temp.length-1];
                break;
            case 'Trident':
                version = "7.0";
                break;
        }
        return {
            version: version,
            name: browsername
        }
    }

    /**
        * Checks the browser compatibility against a config object
        * @param {Object} config-{browsername, version}
        * @return {boolean}
    */

    function browserVersionCheck(){
        var config = {
            "Chrome": 10,
            "MSIE": 9,
            "Opear": 10,
            "Firefox": 10,
            "Safari": 6.2
        }
        var browser = getBrowser();
        var name = browser.name;
        var version = parseFloat(browser.version).toFixed(2);
        if(name === "MSIE" && version <= config.MSIE){
            alert("Unfortunately, your browser is not supported, please try updating your browser");
            return false;
        }
        else if(name === "Chrome" && version <= config.Chrome){
            alert("Unfortunately, your browser is not supported, please try updating your browser");
            return false;
        }
        else if(name === "Firefox" && version <= config.Firefox){
            alert("Unfortunately, your browser is not supported, please try updating your browser");
            return false;
        }
        else if(name === "OPR" && version <= config.Opera){
            alert("Unfortunately, your browser is not supported, please try updating your browser");
            return false;
        }
        else if(name === "Edge" && version <= config.Edge){
            alert("Unfortunately, your browser is not supported, please try updating your browser");
            return false;
        }
        else if(name === "Safari" && version <= config.Safari){
            alert("Unfortunately, your browser is not supported, please try updating your browser");
            return false;
        }
        else {
            return true;
        }
    }

