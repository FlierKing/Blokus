/**
 * Created by QAQ on 2017/12/3.
 */

function Point(x, y) {
    return new PIXI.Point(x, y);
}

var gPiecesLocate = [
    [
        Point(19, -4), Point(13, -4), Point(-4, -4), Point(7, -4), Point(9, 23), 
        Point(18, 23), Point(0, -4), Point(-4, -1), Point(0, 23), Point(-4, 9), 
        Point(23, 22), Point(22, -4), Point(-4, 3), Point(23, 17), Point(-4, 15), 
        Point(4, 23), Point(-4, 22), Point(13, 23), Point(23, 7), Point(23, 12), 
        Point(23, 1)
    ],
    [
        Point(9, 26), Point(10, 24), Point(0, 22), Point(8, 22), Point(12, 30), 
        Point(2, 29), Point(3, 22), Point(8, 30), Point(15, 29), Point(4, 27), 
        Point(13, 26), Point(17, 22), Point(5, 24), Point(17, 26), Point(0, 27), 
        Point(18, 29), Point(9, 26), Point(15, 24), Point(5, 29), Point(1, 24), 
        Point(12, 22)
    ]
]
var gInitState = [
    [
        0, 0, 0, 0, 0, 2, 2, 3, 6, 3, 7, 6, 6, 7, 0, 7, 4, 4, 6, 0, 5
    ],
    [
        0, 0, 0, 0, 0, 0, 2, 4, 4, 0, 1, 6, 1, 1, 0, 4, 6, 0, 6, 1, 3
    ]
]

var gProgressBarEndPointList= [
    Point(0, -1), Point(20, -1), 
    Point(-1, 20), Point(-1, 0), 
    Point(20, 21), Point(0, 21), 
    Point(21, 0), Point(21, 20)
];

function trans_color(color){
    return parseInt(color.slice(1), 16);
}
function ColorThemeFactory(type) {
    if (type === "default") {
        return {
            backgroundColor: trans_color("#f2f0f1"),
            board: {
                dividing_line: trans_color("#ffffff"),
                dividing_line_width: [3, 1],
                frame: trans_color("#e6eae9"),
                progress_bar:{
                    bar_width: [7, 2],
                    accuracy: [trans_color("#ed1c24"), trans_color("#23b14d"), trans_color("#00a2e8"), trans_color("#ffc90d")],
                    additional: trans_color("#a1a3a4"),
                    particles: {
                        accuracy: [trans_color("#cf1b24"), trans_color("#239546"), trans_color("#5d92b1"), trans_color("#D69723")],
                        additional: trans_color("#a1a3a4")
                    }
                }
            },
            piece: {
                initial_alpha: 0.4,
                onselect_alpha: 0.8,
                dropped_alpha: 1,
                controller:{
                    control_parts:{
                        initial_alpha: 0.3,
                        active_alpha: 1,
                        color: trans_color("#333333")
                    },
                    body: {
                        alpha: 0.1,
                        color: trans_color("#333333")
                    }
                } , 
                shadow: trans_color("#949293"),
                //shadow: {
                //    legal: trans_color("#6f645e"),
                //    unlegal: trans_color("#e1d9c4")
                //},
                spectator: trans_color("#b7b7b7"),
                dividing_line: trans_color("#ffffff"),
                dividing_line_width: [3, 1],
                cell: [trans_color("#f2542d"), trans_color("#80ba04"), trans_color("#1da6f0"), trans_color("#feb923")],
                initial:[trans_color("#cf1b24"), trans_color("#239546"), trans_color("#006BA3"), trans_color("#D69723")],
                last_drop: [trans_color("#cf1b24"), trans_color("#239546"), trans_color("#006BA3"), trans_color("#D69723")]
            }
        }
    }
    return null;
}
