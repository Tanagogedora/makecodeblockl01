namespace Blocktest {
    // ブロックの定義
    //% block="あああ"
    //% blockid=sample_aaa
    //% weight=100

    // ブロックが指定された時の処理
    export function testBlock(): void {
        basic.showNumber(1);
    }
}
