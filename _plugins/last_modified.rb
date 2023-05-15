module Jekyll
  class LastModifiedTag < Liquid::Tag
    def render(context)
      page = context.registers[:page]
      mtime = File.mtime(page['path'])
      mtime.strftime('%Y-%m-%d %H:%M:%S %z')
    end
  end
end

Liquid::Template.register_tag('last_modified', Jekyll::LastModifiedTag)
module LastModifiedFilter
  def last_modified(input)
    input_path = File.join(@context.registers[:site].source, input)
    File.mtime(input_path)
  end
end

Liquid::Template.register_filter(LastModifiedFilter)

