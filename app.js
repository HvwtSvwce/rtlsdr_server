var fs = require("fs")
var childproc = require("child_process")
const { stdout } = require("process")

var lol = childproc.execFile("./bin/rtl_adsb.exe")

lol.stdout.on("data", (data) => {
    parseInput(data)
})

function hexToBin(hex) {
    

    var adsb_signal_split = hex.toString().split("");
        //console.log(adsb_signal_split)
        
        var adsb_signal_binary = ""
        var byteCount = 0
        for (var i = 0; i < adsb_signal_split.length; i++) {
        //    console.log(adsb_signal_split[i])
            switch (adsb_signal_split[i]){
                case "0":
                    adsb_signal_binary += hexToDecTable[0];
                    break;
                case "1":
                    adsb_signal_binary += hexToDecTable[1];
                    break;
                case "2":
                    adsb_signal_binary += hexToDecTable[2];
                    break;
                case "3":
                    adsb_signal_binary += hexToDecTable[3];
                    break;
                case "4":
                    adsb_signal_binary += hexToDecTable[4];
                    break;
                case "5":
                    adsb_signal_binary += hexToDecTable[5];
                    break;
                case "6":
                    adsb_signal_binary += hexToDecTable[6];
                    break;
                case "7":
                    adsb_signal_binary += hexToDecTable[7];
                    break;
                case "8":
                    adsb_signal_binary += hexToDecTable[8];
                    break;
                case "9":
                    adsb_signal_binary += hexToDecTable[9];
                    break;
                case "a":
                    adsb_signal_binary += hexToDecTable[10];
                    break;
                case "b":
                    adsb_signal_binary += hexToDecTable[11];
                    break;
                case "c":
                    adsb_signal_binary += hexToDecTable[12];
                    break;
                case "d":
                    adsb_signal_binary += hexToDecTable[13];
                    break;
                case "e":
                    adsb_signal_binary += hexToDecTable[14];
                    break;
                case "f":
                    adsb_signal_binary += hexToDecTable[15];
                    break;
            }
        adsb_signal_binary += " "
        byteCount += 2
    }
    console.log(byteCount)
    return adsb_signal_binary;
}

var hexToDecTable = [
    "0000",
    "0001",
    "0010",
    "0011",
    "0100",
    "0101",
    "0110",
    "0111",
    "1000",
    "1001",
    "1010",
    "1011",
    "1100",
    "1101",
    "1110",
    "1111"
]

function parseInput(data){
    var raw_input = data.toString().replace("*", '').replace(";", '').trim()
    
    //console.lor raw_input)

    if (raw_input.toString().includes("*") || raw_input.toString().includes(";") || raw_input.toString().length > 28 || raw_input.toString().length < 28) {
        console.log("bad packet")
    } else {
        console.log(raw_input)
        console.log(hexToBin(raw_input))
    }
        



    // console.log(data.toString().slice(1, data.toString().length - 3))
    raw_input = data.toString().replace();
    //console.log(data)
}

