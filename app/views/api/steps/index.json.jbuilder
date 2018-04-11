


@steps.each do |step|
  json.steps do
    json.set! step.id do
      json.extract! step, :id, :title, :body, :ord, :article_id, :step_img
    end
  end
end