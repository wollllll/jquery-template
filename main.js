const sample = {
    page: $('#page-sample'),
    getDom(selector) {
        return sample.page.find($(`${selector}`));
    },
    data: {
        message: '',
    },
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
    init() {
        sample.modules.setMessage();
        sample.modules.showMessage();
        sample.modules.getText();
        sample.getDom('#alert').on('click', sample.modules.showAlert);
    }
}

$(() => sample.init());
