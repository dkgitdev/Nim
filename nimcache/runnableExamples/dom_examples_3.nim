#[
autogenerated by docgen
loc: /home/runner/work/Nim/Nim/lib/js/dom.nim(30, 17)
rdoccmd: -b:js -r:off
]#
import "/home/runner/work/Nim/Nim/lib/js/dom.nim"
{.line: ("/home/runner/work/Nim/Nim/lib/js/dom.nim", 30, 17).}:
  proc example(e: Event) = echo "Document is unloaded"
  document.addEventListener("unload", example)  # You can also use "beforeunload".
