import pypandoc

filename = "Fourier_Transform.docx"

pdoc_args = ['--mathjax', "--embed-resources"]
output = pypandoc.convert_file(filename,
                               to='html5',
                               outputfile='Fourier_Transform.html',
                               extra_args=pdoc_args)
