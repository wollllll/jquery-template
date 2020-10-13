const sample = {
    /**
     * 各ページの大枠のタグにページを表すidを振る
     */
    page: $('#page-sample'),
    /**
     * 取得したページからfindしてdomを取得することでスコープをページ単位で区切る
     */
    getDom(selector) {
        return sample.page.find($(`${selector}`));
    },
    /**
     * オブジェクト内で関数等またいでデータを扱う場合はここで定義
     */
    data: {
        message: '',
    },
    /**
     * 関数置くところ
     */
    modules: {
        setMessage() {
            sample.data.message = 'hey';
        },
        showMessage() {
            console.log(sample.data.message);
        },
        getText() {
            const text = sample.getDom('#text').text();

            console.log(text);
        },
        showAlert() {
            alert('clicked');
        }
    },
    /**
     * 定義した関数を実行
     */
    init() {
        sample.modules.setMessage();
        sample.modules.showMessage();
        sample.modules.getText();
        sample.getDom('#alert').on('click', sample.modules.showAlert);
    }
}

/**
 * initを実行
 */
$(() => sample.init());
