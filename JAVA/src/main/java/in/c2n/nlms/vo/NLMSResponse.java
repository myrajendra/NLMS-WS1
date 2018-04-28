package in.c2n.nlms.vo;

import java.util.Collection;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

@JsonIgnoreProperties(ignoreUnknown = true)
@JsonInclude(value = Include.NON_NULL)
public class NLMSResponse {
	private Collection messages;
	private Object message;

	public NLMSResponse() {
	}

	public NLMSResponse(Collection messages) {
		this.messages = messages;
	}

	public NLMSResponse(Object message) {
		super();
		this.message = message;
	}

	public Collection getMessages() {
		return messages;
	}

	public void setMessages(Collection messages) {
		this.messages = messages;
	}

	public Object getMessage() {
		return message;
	}

	public void setMessage(Object message) {
		this.message = message;
	}

}
