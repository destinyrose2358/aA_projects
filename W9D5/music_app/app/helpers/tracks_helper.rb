module TracksHelper

  def ugly_lyrics(lyrics)
    uglies = lyrics.split("\n").map { |line| "&#9835;" + h(line) }.join("\n")
    <<-HTML.html_safe
      <pre>#{uglies}</pre>
    HTML
  end

end
