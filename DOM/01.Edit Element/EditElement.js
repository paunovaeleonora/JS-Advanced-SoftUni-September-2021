function editElement(ref, string, replacer) {
    const content = ref.textContent;
    const matcher = new RegExp(string, 'g');
    const edited = content.replace(matcher, replacer);
    ref.textContent = edited;
}
