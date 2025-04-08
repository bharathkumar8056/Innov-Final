"use client"

import type React from "react"
import { useState, useRef, useEffect } from "react"
import { FaComments, FaPaperPlane, FaTimes } from "react-icons/fa"

interface Message {
  text: string
  isUser: boolean
}

// Update the predefined questions array to include the new questions
const predefinedQuestions = [
  "What's special about Innovfuture Solutions?",
  "How are the products made?",
  "Delivery information",
  "What is your payment policy?",
  "What is your lead time?",
  "What is your minimum order quantity?",
  "What is your shipping policy?",
]

const ChatBot: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState<Message[]>([])
  const [input, setInput] = useState("")
  const [showPredefined, setShowPredefined] = useState(true)
  const [askingLocation, setAskingLocation] = useState({ status: false, step: 0 })
  const [lastAnswerRef, setLastAnswerRef] = useState<HTMLDivElement | null>(null)
  const chatContainerRef = useRef<HTMLDivElement>(null)
  const lastQuestionRef = useRef<HTMLDivElement>(null)

  // Initialize chat when opened
  useEffect(() => {
    if (isOpen && messages.length === 0) {
      setMessages([
        { text: "Hello! How can I help you today? Please select one of the following questions:", isUser: false },
      ])
      setShowPredefined(true)
      setAskingLocation({ status: false, step: 0 })
    }

    // Prevent body scroll when chat is open on mobile
    if (isOpen) {
      document.body.style.overflow = "hidden"

      // Hide WhatsApp button when chat is open on mobile
      const whatsappButton = document.querySelector(".whatsapp-button") as HTMLElement
      if (whatsappButton && window.innerWidth < 768) {
        whatsappButton.style.display = "none"
      }
    } else {
      document.body.style.overflow = "unset"

      // Show WhatsApp button when chat is closed
      const whatsappButton = document.querySelector(".whatsapp-button") as HTMLElement
      if (whatsappButton) {
        whatsappButton.style.display = "block"
      }
    }

    return () => {
      document.body.style.overflow = "unset"
      const whatsappButton = document.querySelector(".whatsapp-button") as HTMLElement
      if (whatsappButton) {
        whatsappButton.style.display = "block"
      }
    }
  }, [isOpen, messages.length])

  const handleToggle = () => {
    setIsOpen(!isOpen)
  }

  const handleSend = () => {
    if (input.trim()) {
      // Add user message
      setMessages((prev) => [...prev, { text: input, isUser: true }])

      // Store reference to the question
      setTimeout(() => {
        if (lastQuestionRef.current) {
          lastQuestionRef.current.scrollIntoView({ block: "center" })
        }
      }, 50)

      // Process response
      handleResponse(input)
      setInput("")
    }
  }

  const handlePredefinedQuestion = (question: string) => {
    // Add user question
    setMessages((prev) => [...prev, { text: question, isUser: true }])

    // Process response
    handleResponse(question)
  }

  // Update the handleResponse function to include responses for the new questions
  const handleResponse = (question: string) => {
    let response = ""
    if (askingLocation.status) {
      if (askingLocation.step === 1) {
        response = `Thank you. And which area within ${question}?`
        setAskingLocation({ status: true, step: 2 })
        setShowPredefined(false)
      } else if (askingLocation.step === 2) {
        response = `Thank you for providing your location details. For specific delivery information to ${question}, please contact us at info@innovfuturesolutions.com or call us at +91-7010735275. Our team will be happy to assist you further.`
        setAskingLocation({ status: false, step: 0 })
        setShowPredefined(true)
      }
    } else {
      switch (question.toLowerCase()) {
        case "what's special about innovfuture solutions?":
          response =
            "Innovfuture Solutions specializes in high-quality, sustainably sourced agro products. We combine traditional methods with modern technology to deliver the purest and most nutritious products to our customers."
          break
        case "how are the products made?":
          response =
            "Our products are made using a combination of traditional and modern methods. We source the finest raw materials from trusted farmers, then process them using state-of-the-art equipment that preserves their natural goodness. Each product undergoes strict quality control to ensure the highest standards."
          break
        case "delivery information":
          response = "Sure, I can help you with delivery information. Which country are you located in?"
          setAskingLocation({ status: true, step: 1 })
          setShowPredefined(false)
          break
        case "what is your payment policy?":
          response =
            "Payment Terms:\n\n" +
            "* For transactions under a Letter of Credit (LC), we follow the standard procedures as agreed in the LC.\n\n" +
            "* For direct payments, we require a 50% deposit upon order confirmation. The remaining balance should be paid after shipment but before the sharing of shipping documents.\n\n" +
            "Payment Methods:\n\n" +
            "* Letter of Credit (LC) (preferred)\n\n" +
            "* Wire Transfer (for direct payments)\n\n" +
            "Currency: Payments should be made in dollars unless otherwise agreed upon."
          break
        case "what is your lead time?":
          response =
            "Our lead time varies depending on several factors, including the destination country, port of origin, shipping method, and the specific exporter. However, on average, our lead time for exporting typically ranges from 10 to 30 days.\n\n" +
            "Here's a breakdown of the process:\n\n" +
            "Processing and Packaging: Depending on the type and brand, processing and packaging may take about 3-7 days.\n\n" +
            "Customs Clearance and Documentation: Export documentation and customs clearance can take 2-5 days.\n\n" +
            "Shipping and Transit: The actual shipping time can range between 7-20 days, depending on the distance and the mode of transport (sea freight being the most common). For example:\n\n" +
            "To Middle Eastern countries: Typically 7-14 days.\n\n" +
            "To Europe: Approximately 20-30 days.\n\n" +
            "To the United States: Around 25-35 days."
          break
        case "what is your minimum order quantity?":
          response =
            "B2B Sales: For business-to-business transactions, our MOQ is 200 liters.\n\n" +
            "B2C Sales: For smaller businesses or even individual customers, we consider smaller MOQs, such as 50 liters per order."
          break
        case "what is your shipping policy?":
          response =
            "Shipping Policy\n\n" +
            "1. Shipping Methods:\n" +
            "We primarily use sea freight for international shipments, as it is the most cost-effective option for bulk orders. For smaller orders or urgent shipments, we may also offer air freight depending on the destination and size of the order.\n\n" +
            "2. Shipping Costs:\n" +
            "Shipping costs will depend on the destination, size of the order, and shipping method. We strive to keep shipping fees as competitive as possible. Once we have details about your order, we will provide an accurate quote that includes the shipping cost.\n\n" +
            "3. Customs and Duties:\n" +
            "Please note that customs duties, taxes, and other charges in your country are the responsibility of the buyer. We will provide all necessary documentation to facilitate smooth customs clearance, but please ensure you are aware of the import regulations and duties in your country.\n\n" +
            "4. Packaging:\n" +
            "Our cooking oil is securely packaged in food-grade containers to ensure product safety during transit. We use standard packaging sizes (e.g., 1-liter, 5-liter), but if you have special packaging requirements, please let us know, and we will do our best to accommodate.\n\n" +
            "5. Tracking and Communication:\n" +
            "Once the shipment is dispatched, we will provide you with tracking details so you can monitor the progress of your order. We will keep you updated throughout the process, and if any issues arise, we'll communicate promptly to resolve them.\n\n" +
            "6. Insurance (Optional):\n" +
            "We recommend purchasing shipping insurance for valuable or high-volume orders to cover any unexpected issues during transit. If you'd like to add insurance, please let us know, and we can arrange it for you."
          break
        default:
          response =
            "I'm sorry, I don't have information on that specific topic. Please choose from one of the following questions:"
      }
    }

    // Add bot response after a short delay
    setTimeout(() => {
      setMessages((prev) => [...prev, { text: response, isUser: false }])

      // Always show predefined questions after a response, except during location gathering
      if (!askingLocation.status) {
        setShowPredefined(true)
      }

      // Ensure the answer is visible
      setTimeout(() => {
        // Find the last bot message (the answer)
        const botMessages = document.querySelectorAll(".bot-message")
        if (botMessages.length > 0) {
          const lastBotMessage = botMessages[botMessages.length - 1] as HTMLElement
          if (lastBotMessage) {
            // Scroll to make the answer visible
            lastBotMessage.scrollIntoView({ block: "start", behavior: "auto" })

            // Store reference to the answer
            setLastAnswerRef(lastBotMessage as HTMLDivElement)
          }
        }
      }, 100)
    }, 500)
  }

  // Update the ChatBot component to be fully responsive with close button on all views
  return (
    <>
      {/* Overlay for mobile */}
      {isOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden" onClick={() => setIsOpen(false)} />
      )}

      <div className={isOpen ? "chat-open" : "chat-closed"}>
        {isOpen && (
          <div className="flex flex-col h-full md:h-auto md:max-h-[600px] w-full md:w-96 bg-white md:rounded-lg shadow-xl">
            <div className="bg-green-600 text-white p-4 flex justify-between items-center md:rounded-t-lg">
              <h3 className="text-xl font-bold font-playfair">Innovfuture Solutions Chat</h3>
              <button onClick={() => setIsOpen(false)} className="text-white hover:text-gray-200">
                <FaTimes size={24} />
              </button>
            </div>

            <div
              ref={chatContainerRef}
              className="flex-1 overflow-y-auto p-4 bg-white"
              style={{ maxHeight: "calc(100vh - 180px)" }}
            >
              {messages.map((message, index) => (
                <div
                  key={index}
                  className={`mb-4 ${message.isUser ? "text-right" : "text-left"}`}
                  ref={message.isUser && index === messages.length - 2 ? lastQuestionRef : null}
                >
                  <span
                    className={`inline-block p-3 rounded-lg ${
                      message.isUser ? "bg-green-100 text-green-800" : "bg-green-600 text-white bot-message"
                    } whitespace-pre-line max-w-[90%] text-base`}
                  >
                    {message.text}
                  </span>
                </div>
              ))}
              {showPredefined && (
                <div className="mt-4 predefined-questions">
                  <p className="text-sm text-gray-500 mb-2">Choose a question:</p>
                  {predefinedQuestions.map((question, index) => (
                    <button
                      key={index}
                      className="block w-full text-left text-sm text-green-600 hover:text-green-800 mb-2 p-2 rounded-lg hover:bg-green-100 transition duration-300"
                      onClick={() => handlePredefinedQuestion(question)}
                    >
                      {question}
                    </button>
                  ))}
                </div>
              )}
            </div>

            <div className="p-4 border-t bg-white md:rounded-b-lg">
              <div className="flex">
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder="Type your message..."
                  className="flex-1 px-3 py-2 border rounded-l-md focus:outline-none focus:ring-2 focus:ring-green-500 text-black"
                  onKeyPress={(e) => e.key === "Enter" && handleSend()}
                />
                <button
                  onClick={handleSend}
                  className="bg-green-600 text-white px-4 py-2 rounded-r-md hover:bg-green-700 transition duration-300 flex items-center justify-center"
                >
                  <FaPaperPlane className="mr-1" />
                  <span className="hidden sm:inline"></span>
                </button>
              </div>
            </div>
          </div>
        )}

        {!isOpen && (
          <button
            onClick={handleToggle}
            className="bg-green-600 text-white p-4 rounded-full shadow-lg hover:bg-green-700 transition duration-300"
          >
            <FaComments size={24} />
          </button>
        )}
      </div>
    </>
  )
}

export default ChatBot
