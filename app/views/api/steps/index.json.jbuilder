


@steps.each do |step|
  json.steps do
    json.set! step.id do
      json.extract! step, :title, :body, :ord, :article_id
    end
  end
end