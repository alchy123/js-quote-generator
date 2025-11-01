# Quote Generator with Vanilla JavaScript, HTML and CSS

* This is random quote generator project. I am using and fetching quotes from a lightweight jsonl local dataset.
* I used a mobile-first design approach about responsive design.
* Dataset I implemented: [Abirate English Quotes from Hugging Face](https://huggingface.co/datasets/Abirate/english_quotes/tree/main)
    * Dataset was not good enough for me to use directly. I was in need of some other properties like id and quoteLength for my objects. For this purpose, I wrote a script with JavaScript and it's currently named '[jsonl-manipulation.js](./jsonl-manipulation.js)'. I just did manually used this script.
    * Note: I didn't clean the dataset, there are some grammatic or some other problems with content of the objects.