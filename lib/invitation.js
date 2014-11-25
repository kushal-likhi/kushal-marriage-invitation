require('operator-overloading');

(function (exports, require) {
    //Let there be colors
    require('colors');

    //Let there be dependencies.
    var terminalMenu = require('terminal-menu'),
        asciimo = require('asciimo').Figlet,
        clc = require('cli-color'),
        FillRect = require('./FillRect');

    //Clear the terminal
    process.stdout.write(clc.reset);

    //Make non exiting
    process.stdin.resume();

    //Overload the function >>> operator. Fun!
    Function.prototype.__zeroFillRSHIFT = function (leftOperand) {
        return leftOperand(this);
    };

    var serverRunning = false;

    function drawMenu(onSelection) {
        //Operator overloading Fun! ;)
        (process.stdout << new FillRect(0, 0, clc.width, clc.height)).draw('green');

        //Just some operator overloading fun.. Not good way for public apps though ;)
        return asciimo.write.bind(this, "-Invitation-", "epic") >>> (function (art) {
            //Write heading
            process.stdout.write(clc.moveTo(0, 0));
            process.stdout.write(art.greenBG.white.bold);

            //Let there be terminal menu
            var menu = terminalMenu({ width: 29, x: 4, y: 11 });
            menu.write('KUSHAL\'S MARRIAGE INVITATION\n');
            menu.write('~~~~~~~~~~~~~~~~~~~~~~~~~~~~~\n');
            menu.write('Select Option:\n');
            menu.write('-----------------------------\n');

            menu.add('WHO AM I MARRYING?');
            menu.add('SAGAN FUNCTION DETAILS');
            menu.add('MARRIAGE FUNCTION DETAILS');
            menu.add('VIEW FULL DESIGN CARD');
            menu.add('CONTACT ME');
            menu.add('EXIT');

            menu.on('select', function (label) {
                process.stdout.write(clc.moveTo(0, 11 + 18));
                console.log(' -> Confirm attendance by forking it on GitHub: https://github.com/kushal-likhi/kushal-marriage-invitation'.greenBG.bold);
                process.stdout.write(clc.moveTo(0, 11 + 12));
                console.log(' > LOADING...'.greenBG);
                //Operator overloading experiments/fun!
                (process.stdout << new FillRect(13, 11 + 12, 30, 1)).draw('green');
                (process.stdout << new FillRect(37, 10, clc.width - 40, 19)).draw('green');
                onSelection(label, function () {
                    process.stdout.write(clc.moveTo(0, 11 + 12));
                    console.log((' > ' + label).greenBG);
                });
            });
            menu.createStream().pipe(process.stdout);
        });
    }

    function writeViaBounds(x, y, lines) {
        lines.forEach(function (line, idx) {
            process.stdout.write(clc.moveTo(x, y + idx) + line);
        });
    }

    //Operator overloading fun. ;)
    return drawMenu >>> (function (label, done) {
        switch (label) {
            case 'EXIT':
                process.stdout.write(clc.reset);
                process.exit(0);
                break;
            case 'WHO AM I MARRYING?':
                (process.stdout << new FillRect(38, 10, 40, 10)).draw('red');
                writeViaBounds(40, 12, [
                    'Name: Vernika Sharma'.redBG.white.bold,
                    '--------------------'.redBG.white.bold,
                    ''.redBG.white.bold,
                    'Awesome girl, lives in Mayur Vihar.'.redBG.white.bold
                ]);
                process.stdout.write(clc.moveTo(40, 12));
                break;
            case 'SAGAN FUNCTION DETAILS':
                (process.stdout << new FillRect(38, 10, 37, 12)).draw('red');
                writeViaBounds(40, 11, [
                    '          SAGAN FUNCTION'.redBG.white.bold,
                    '          --------------'.redBG.white.bold,
                    ''.redBG.white.bold,
                    'DATE : 4 Dec, 2014'.redBG.white.bold,
                    'PLACE: AISF - HALL'.redBG.white.bold,
                    '       Kalka Devi Marg, New Delhi'.redBG.white.bold,
                    '       (Behind LSR College)'.redBG.white.bold,
                    ''.redBG.white.bold,
                    'Sagan...................7:00 PM'.redBG.white.bold,
                    'Dinner..................8:00 PM'.redBG.white.bold
                ]);
                process.stdout.write(clc.moveTo(40, 12));
                break;
            case 'MARRIAGE FUNCTION DETAILS':
                (process.stdout << new FillRect(38, 10, 37, 18)).draw('red');
                writeViaBounds(40, 11, [
                    '        MARRIAGE FUNCTION'.redBG.white.bold,
                    '        -----------------'.redBG.white.bold,
                    ''.redBG.white.bold,
                    'DATE : 6 Dec, 2014'.redBG.white.bold,
                    'PLACE: S.K EAST END'.redBG.white.bold,
                    '       Star City Mall'.redBG.white.bold,
                    '       Mayur Vihar, New Delhi'.redBG.white.bold,
                    ''.redBG.white.bold,
                    'Assembly Of Barat........6:00 PM'.redBG.white.bold,
                    'Serabandi................6:30 PM'.redBG.white.bold,
                    'Departure Of Barat.......7:00 PM'.redBG.white.bold,
                    ''.redBG.white.bold,
                    'Barat Will Assemble At:'.redBG.white.bold,
                    '----------------------'.redBG.white.bold,
                    'Behind petrol pump,'.redBG.white.bold,
                    'Start City Mall'.redBG.white.bold
                ]);
                process.stdout.write(clc.moveTo(40, 12));
                break;
            case 'VIEW FULL DESIGN CARD':
                (process.stdout << new FillRect(38, 10, 44, 8)).draw('red');
                if(!serverRunning){
                    serverRunning = true;
                    require('./server/index');
                }
                writeViaBounds(40, 11, [
                    '         FULL DESIGN CARD'.redBG.white.bold,
                    '         ----------------'.redBG.white.bold,
                    ''.redBG.white.bold,
                    'See card pic on your browser.'.redBG.white.bold,
                    ''.redBG.white.bold,
                    'Server Running At: '.redBG.white.bold + 'http://localhost:9732'.redBG.yellow
                ]);
                process.stdout.write(clc.moveTo(40, 12));
                break;
            case 'CONTACT ME':
                (process.stdout << new FillRect(38, 10, 37, 7)).draw('red');
                writeViaBounds(40, 11, [
                    '          CONTACT ME'.redBG.white.bold,
                    '          ----------'.redBG.white.bold,
                    ''.redBG.white.bold,
                    'CellPhone: +91 9873333033'.redBG.white.bold,
                    'Email    : kushal.likhi@gmail.com'.redBG.white.bold
                ]);
                process.stdout.write(clc.moveTo(40, 12));
                break;
        }
        done();
    });

}.enableOverloading())(exports, require);